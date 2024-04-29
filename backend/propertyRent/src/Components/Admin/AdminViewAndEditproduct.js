import AdminNavComponent from "./AdminNavComponent"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from "@mui/material";
import ProductImageUploadComponent from "./ProductImageUploadComponent";

const AdminViewAndEditproduct = () => {

  const currentProduct = {
    name: "ljdofsdhfihihid",
    productDescription: "odhsfhsihfhui",
    materialDescription: "aiodhishuhsiu",
    category: "MEN",
    subCategory: "Top Wear",
    allVariations: [
      {
        color: "Yellow",
        colorCode: "79879879",
        discount: 50,
        images: [
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/honda_uw9jhr.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/ford_obyojt.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/nissan_aetbp3.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331376/hyundai_zd5ty1.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333066/BMW_vvt5ve.jpg"
        ],
        listingPrice: "200",
        priceAfterDiscount: "100",
        quantity: "210",
        size: "XS"
      },
      {
        color: "Yellow",
        colorCode: "098908908",
        discount: 50,
        images: [
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/honda_uw9jhr.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/ford_obyojt.jpg",
          "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
        ],
        listingPrice: "300",
        priceAfterDiscount: "150",
        quantity: "210",
        size: "XL"
      }
    ]
  };

  
  const [productVariation, setproductVariation] = React.useState({ color: '', size: '', quantity: '', colorCode: '', images : [],listingPrice : '' , priceAfterDiscount : '', discount: '' })
  const [discount , setdiscount] = React.useState('')

  const [Product , setProduct] = React.useState(currentProduct)

  const handleRemove = (remove) => {
    const updatedVarients  = Product.allVariations.filter((item) => item !== remove)
    setProduct({...Product,allVariations : updatedVarients});
    console.log(Product);
  }

const calculateDiscount = () => {
    if(productVariation.listingPrice !== '' && productVariation.priceAfterDiscount !== ''){
      const Discount =((productVariation.listingPrice-productVariation.priceAfterDiscount)/productVariation.listingPrice)*100;
        setdiscount(Discount)
        setproductVariation({...productVariation, discount: Discount})
    }
    else{
      setdiscount('')
    }
}

  const addVariationHandler = () => {
    if(productVariation.color == '' || productVariation.size == '' || productVariation.quantity == ''|| productVariation.colorCode == ''|| productVariation.listingPrice == ''){
      return alert('all Fields required')
    }else{
      const allVarients = [...Product.allVariations, productVariation]

      setProduct({...Product ,allVariations : allVarients})

      const currentSelect = document.getElementById('selectSize');
      currentSelect.value = 'Select Size'
      const addquantity = document.getElementById('addQuantity')
      addquantity.value = ''
      const selectColor = document.getElementById('selectColor')
      selectColor.value = 'Select Color'
      const ColorCode = document.getElementById('ColorCode')
      ColorCode.value = ''
    }
  }

  const addProductHandler = () => {
    if((Product.name && Product.productDescription && Product.materialDescription && Product.allVariations && Product.category && Product.subCategory) !== ''){
    }else{
      return alert('all fields required')
    }
  }

  const updateImages = () => {
  }

  React.useEffect(() => {    
    calculateDiscount()
  }, [productVariation])

  React.useEffect(() => {    
    updateImages()
  }, [])
  React.useEffect(() => {  
    console.log(Product)  
  }, [Product])

  return (
    <div style={{ display: 'flex' }}>
      <AdminNavComponent />
      <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#F2F6FC', justifyContent: 'center' }}>
        <div className="CreateProductContainer" >
          <h5 style={{ margin: '10px' }}>Update Product</h5>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextField  onChange={(e) =>{setProduct({...Product , name : e.target.value})}} style={{ width: '98%' }}
                required
                id="outlined-required"
                defaultValue={`${Product.name}`}
                label= 'Product Name'
              />
              
              <TextareaAutosize 
              defaultValue={`${currentProduct.productDescription}`}
              onChange={(e) =>{setProduct({...Product ,
               productDescription : e.target.value})}} style={{ width: '98%', height: '100px',backgroundColor: '#F2F6FC', borderRadius: '4px'  }}
                placeholder="Product Description"
                sx={{
                  '--Textarea-focused': 1,
                }}
              />
              <TextareaAutosize 
              defaultValue={`${Product.materialDescription}`}
              onChange={(e) =>{setProduct({...Product , materialDescription : e.target.value})}} style={{ width: '98%', height: '100px', marginTop: '5px', marginBottom: '5px',backgroundColor: '#F2F6FC', borderRadius: '4px'  }}
                placeholder="Material Description"
                sx={{
                  '--Textarea-focused': 1,
                }}
              />
              <div style={{ width: '98%', border: '1px solid grey', borderRadius: '4px', marginBottom: '8px' }}>
              <h6 style={{ margin: '10px' }} >Select Category</h6>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>               
                  <select
                   onChange={(e) =>{setProduct({...Product , category : e.target.value})}} defaultValue={currentProduct.category} style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option >Change Category</option>
                    <option>MEN</option>
                    <option>WOMEN</option>
                    <option>POSTERS</option>
                    <option>NEW ARRIVALS</option>
                    <option>ACCESSORIES</option>
                    <option>THEMES</option>
                  </select>
                  <select onChange={(e) =>{setProduct({...Product , subCategory : e.target.value})}} defaultValue={currentProduct.subCategory} style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option>Select-Sub Category</option>
                    <option>Top Wear</option>
                    <option>Bottom Wear</option>
                    <option>Jackets</option>
                    <option>Sweatshirts</option>
                    <option>Winter Wear</option>
                    <option>Joggers</option>
                  </select>
                </div>
              </div>
              <div style={{ width: '98%', border: '1px solid grey', borderRadius: '4px',marginBottom: '8px' }}>
                <h6 style={{ margin: '10px' }} >Current Product Variants</h6>
                <p style={{ margin: '10px', fontSize: '12px' }} >If you want to update existed varient, then you have to create new varient with same credentials, then delete the existed one. </p>
                <div style={{display: 'flex' ,alignItems: 'center' , justifyContent: 'space-between', width : '100%', flexDirection: 'column'}}>


                {Product.allVariations && (Product.allVariations).map((item , idx) => (
                <div style={{position: 'relative', width: '100%'}} key={idx}>  
                <div  style={{display: 'flex' , flexDirection: 'column', justifyContent: 'space-between', width : '98%', margin: '5px', border: '1px dashed grey'}}>
                <div > 
               <text><b>Size : </b>{item.size}, <b>Quantity : </b>{item.quantity}, <b>Colour : </b>{item.color}, <b>Colour Code : </b>{item.colorCode}, <b>Listing Price : </b>{item.listingPrice}, <b>Price After Discount : </b>{item.priceAfterDiscount}, <b>Discount Percent : </b>{item.discount}%</text>
              </div>
              <div style={{ display: 'flex'}}>{item.images && item.images.map((image,idx) =>(
                <img style={{border: '1px dashed black', margin: '5px'}} key={idx} height={'80px'} width={'60px'} src={image}></img>
              ))}</div>             
              </div>
              <h4 className="remove_btn" style={{position: 'absolute', right: 0, top: 0,display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(() => {handleRemove(item)})}>X</h4></div>                 
                ))}
                </div>
                <h6 style={{ margin: '10px' }} >Add New Varient</h6>
                
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <select id="selectSize" onChange={(e) => { e.target.value !== 'Select Size' && setproductVariation({...productVariation, size: e.target.value }) }} defaultValue="Select Size" style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option>Select Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                  <TextField id="addQuantity" onChange={(e) => { setproductVariation({...productVariation, quantity: e.target.value }) }} style={{ width: '50%' }}
                    classes="filled-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', margin: '8px' }}>
                  <select id="selectColor" onChange={(e) => { e.target.value !== 'Select Color' && setproductVariation({...productVariation, color: e.target.value }) }} defaultValue="Select Color" style={{ width: '33%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option >Select Color</option>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Grey</option>
                  </select>
                    <TextField  style={{ width: '33%' }}
                      id="outlined-required"
                      label="Color Name"
                      defaultValue=""
                    />
                    <TextField  id = 'ColorCode' onChange={(e) => {setproductVariation({...productVariation, colorCode: e.target.value }) }} style={{ width: '33%' }}
                      label="Color Code"
                      defaultValue=""
                    />
                    <button type="button" style={{ width: '33%', height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '15px', fontSize: '13px', fontWeight: '700', color: 'grey' }} name="add_category">Add New Color</button>
                  </div>
                </div>
                <div style={{
                width: '100%', display: 'flex', alignItems:
                  'center',
                justifyContent: 'center', flexDirection: 'column'
              }}>
                <ProductImageUploadComponent/>
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                <TextField onChange={(e) => { setproductVariation({...productVariation, listingPrice: e.target.value }) }} style={{ width: '33%' }}
                  classes="filled-number"
                  label="Listing Price"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField onChange={(e) => { setproductVariation({...productVariation, priceAfterDiscount: e.target.value }) }} style={{ width: '33%' }}
                  classes="filled-number"
                  label="Price After Discount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField style={{ width: '33%' }}
                  disabled
                  classes="filled-disabled"
                  label="Calculated Discount"
                      value={discount}
                    />
              </div>
                <div style={{width : '100%' , display: 'flex' , alignItems : 'center' , justifyContent : 'center'}}>
                <button type="button" onClick={() => {addVariationHandler()}} style={{ width: '98%', marginBottom: '10px' }} className="mailBtn">Add Product Variant</button>
                </div>
              </div> 
            </div>
            <button type="button" onClick={() => {addProductHandler()}}  style = {{width: '100%'}}className="addtocartBtn">Update </button>
          </Box>
        </div>
      </div>
    </div>
  )
}
export default AdminViewAndEditproduct