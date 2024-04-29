import AdminNavComponent from "./AdminNavComponent"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import axios from 'axios';

import ProductImageUploadComponent from "./ProductImageUploadComponent";
import { AiOutlineDelete } from "react-icons/ai";

const AdminCreateNewProduct = () => {

  const [platforms, setPlatforms] = useState([]);
  const [image, setImage] = useState('');

  const [Product, setProduct] = React.useState({ name: '', category: '', allPlatforms: [], imageUrl: '' })

  const [newCategory, setNewCategory] = useState("");

  const [newPlatform, setNewPlatform] = useState("");

  const [singalplatform, setSingalplatform] = useState({ platformName: '', link: '' })

  const [allCategories, setAllCategories] = useState([]);

  const [allPlatforms, setAllPlatforms] = useState([]);


  const addNewCategoryHandler = async () => {
    if (newCategory == '') {
        alert('Please Enter The New Category Name')
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        }
      }

      try {
        const response = await axios.post('/api/admin/createCategory', { name: newCategory }, config);
        alert(response.data.message);
        fetchCategories();
        setNewCategory('');
      } 
      catch (err) {
        console.log(err);
      }
  }
}
  const addNewPlatformHandler = async () => {
    if (newPlatform == '') {
        alert('Please Enter The New Platform Name')
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        }
      }

      try {
        const response = await axios.post('/api/admin/createPlatform', { name: newPlatform }, config);
        alert(response.data.message);
        fetchPlatforms();
        setNewPlatform('')
      } 
      catch (err) {
        console.log(err);
      }
  }
}


const addProductHandler = async () => {
  if ((Product.name && Product.category && image) !== '' && platforms.length != 0) {

    const config = {
      headers: {
        "Content-type": "application/json",
      }
    }

    try {

      const response = await axios.post('/admin/addNewProduct', Product, config);
      console.log(response.data);
      alert(response.data.message);
      setPlatforms([]);
      setProduct({ name: '', category: '', allPlatforms: [], imageUrl: '' });
      setImage('');
    } catch (err) {
      console.log(err);
    }


  } else {
    return alert('all fields required')
  }
}

useEffect(() => {
  setProduct({ ...Product, allPlatforms: platforms })
}, [platforms])

useEffect(() => {
  setProduct({ ...Product, imageUrl: image })
}, [image])

const removeFromPlatforms = (item) => {

  const updatedPlatforms = platforms.filter((platform) => platform !== item);
  setPlatforms(updatedPlatforms);
}

const addPlatform = () => {
  if ((singalplatform.platformName && singalplatform.link) == '') {
    alert('Platform Name and Link, Both Required!')
    return
  }
  const exists = platforms.find((item) => item.platformName === singalplatform.platformName)
  if (exists) {
    alert('Try with another Platform name')
    return;
  }
  setPlatforms([...platforms, singalplatform]);

  setSingalplatform({ platformName: '', link: '' });
}

const fetchCategories = async() => {
  try{
    const response = await axios.get('/api/apiRoutes/fetchCategories');
  setAllCategories(response.data.data);
  }catch{
     alert('something went wrong')
  }
}

const fetchPlatforms = async() => {

  try{
    const response = await axios.get('/api/apiRoutes/fetchPlatforms');
  setAllPlatforms(response.data.data);
  }catch{
     alert('something went wrong')
  }
}

useEffect(() => {
   fetchCategories();
   fetchPlatforms();
},[])

return (
  <div style={{ display: 'flex' }}>
    <AdminNavComponent />
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#F2F6FC', justifyContent: 'center' }}>
      <div className="CreateProductContainer" >
        <h5 style={{ margin: '10px' }}>Create New Product</h5>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TextField onChange={(e) => { setProduct({ ...Product, name: e.target.value }) }} style={{ width: '98%' }}
              required
              id="outlined-required"
              label="Product Name"
              defaultValue=""
              value={Product.name}
            />

            <div style={{ width: '98%', border: '1px solid grey', borderRadius: '4px', marginBottom: '8px' }}>
              <h6 style={{ margin: '10px' }} >Select Category</h6>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <select onChange={(e) => { setProduct({ ...Product, category: e.target.value }) }} defaultValue="Select Category" value={Product.category} style={{
                  width: '33%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey'
                }}>
                  <option >Select Category</option>
                  {allCategories.map((Category,idx) => (
                    <option key={idx}>{Category.name}</option>
                  ))}
                </select>
                <div style={{ display: 'flex', width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                  <TextField
                    onChange={(e) => {
                      setNewCategory(e.target.value)
                    }}
                    id="outlined-required"
                    label="New Category"
                    defaultValue=""
                    value={newCategory}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '33%', justifyContent: 'center', margin: '8px' }}>
                  <button type="button" onClick={addNewCategoryHandler} style={{ width: '100%', height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '4px', fontWeight: '600', fontSize: '13px', color: 'grey' }} name="add_category">Click To Add</button>
                </div>
              </div>

            </div>
            <div style={{
              width: '100%', display: 'flex', alignItems:
                'center',
              justifyContent: 'center', flexDirection: 'column'
            }}>
              <ProductImageUploadComponent image={image} setImage={setImage} />
            </div>
          </div>
          <div style={{ width: '100%' }}>

            {platforms.map((platform, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#D6B610', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '13px', paddingRight: '13px', fontWeight: 'bold', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', marginTop: '5px', height: '56px', borderRadius: '5px', margin: '3px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <text>{platform.platformName} - </text>
                  <text max={20} style={{ color: 'green', display: "flex", maxWidth: '40px' }}>{platform.link}</text>
                </div>
                <AiOutlineDelete onClick={() => { removeFromPlatforms(platform) }} fontSize={25} />
              </div>
            ))}


          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
            <select onChange={(e) => { setSingalplatform({ ...singalplatform, platformName: e.target.value }) }} defaultValue={"Select Platform"} value={singalplatform.platformName} style={{
              width: '33%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey'
            }}>
              <option>Select Platform</option>
              {allPlatforms.map((platform,idx) => (
                <option key={idx}>{platform.name}</option>
              ))}
            </select>
            <TextField onChange={(e) => { setSingalplatform({ ...singalplatform, link: e.target.value }) }} style={{ width: '98%' }}
              required
              id="outlined-required"
              label="Link"
              defaultValue=""
              value={singalplatform.link}
            />
            <button onClick={addPlatform} type="button" style={{ height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '4px', fontWeight: '600', fontSize: '35px', color: 'grey', width: '100px', color: 'purple', fontWeight: "bolder" }} name="add_category">+</button>
          </div>
          <div style={{ width: '100%', border: '1px solid grey', borderRadius: '4px', marginBottom: '8px', marginLeft: '5px', marginRight: '5px' }}>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                  <TextField style={{width: '100%'}}
                    onChange={(e) => {
                      setNewPlatform(e.target.value)
                    }}
                    id="outlined-required"
                    label="New Platform Name"
                    defaultValue=""
                    value={newPlatform}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'center', margin: '8px' }}>
                  <button type="button" onClick={addNewPlatformHandler} style={{ width: '100%', height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '4px', fontWeight: '600', fontSize: '13px', color: 'grey' }} name="add_Platform">Click To Add</button>
                </div>
              </div>

            </div>
          <button type="button" onClick={() => { addProductHandler() }} style={{ width: '100%' }} className="addtocartBtn">Create Product</button>
        </Box>
      </div>
    </div>
  </div>
)
}
export default AdminCreateNewProduct