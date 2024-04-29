import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image from '../../images/white.jpg'
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, TextField } from '@mui/material';

const AdminDisplayAllProducts = () => {

  const productData = [
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '20', productId: 'slkdfshdfhuiudsihf' },
    { productName: 'white Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfhuiudsihf' },
    { productName: 'Red Tshirt Round collar 100% Cotton', productDiscount: '30', productId: 'slkdfshdfhuiudsih' },
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '40', productId: 'slkdfshdfhuiudsi' },
    { productName: 'Blue Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfhuiuds' },
    { productName: 'white Tshirt Round collar 100% Cotton', productDiscount: '20', productId: 'slkdfshdfhuiud' },
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfhuiu' },
    { productName: 'Blue Tshirt Round collar 100% Cotton', productDiscount: '90', productId: 'slkdfshdfhui' },
    { productName: 'Red Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfhu' },
    { productName: 'Yellow Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfh' },
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdf' },
    { productName: 'Yellow Tshirt Round collar 100% Cotton', productDiscount: '30', productId: 'slkdfshdfiudsihf' },
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '50', productId: 'slkdfshdfhuisihf' },
    { productName: 'White Tshirt Round collar 100% Cotton', productDiscount: '60', productId: 'slkdfshdfhusihf' },

  ]

  const [filters, setFilters] = React.useState({ productName: '', productDiscount: '', productId: '' });

  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'white', // Change the border color here
            },
          },
        },
      },
    },
  });

  const filterProducts = () => {
    if (filters.productName != '' && filters.productDiscount
      == '' && filters.productId == '') {
      console.log(filters)
      const products = productData.filter((product) => product.productName.toLowerCase().includes(filters.productName.toLowerCase()));
      console.log(products);
      setFilteredProducts(products);
    } else if (filters.productName != '' && filters.productDiscount != '' && filters.productId == '') {
      const products = productData.filter((product) => product.productDiscount === filters.productDiscount && product.productName.toLowerCase().includes(filters.productName.toLowerCase()));
      console.log(products);
      setFilteredProducts(products);
      console.log(filteredProducts);
    }
    else if (filters.productName == '' && filters.productDiscount != '' && filters.productId == '') {
      const products = productData.filter((product) => product.productDiscount === filters.productDiscount);
      console.log(products);
      setFilteredProducts(products);
      console.log(filteredProducts);
    }
    else if (filters.productName == '' && filters.productDiscount == '' && filters.productId != '') {
      const products = productData.filter((product) => product.productId === filters.productId);
      console.log(products);
      setFilteredProducts(products);
      console.log(filteredProducts);
    }
    else if (filters.productName != '' && filters.productDiscount != '' && filters.productId != '') {
      const products = productData.filter((product) => product.productDiscount === filters.productDiscount && product.productName.toLowerCase().includes(filters.productName.toLowerCase()) && product.productId === filters.productId);
      console.log(products);
      setFilteredProducts(products);
      console.log(filteredProducts);
    }
    else {
      setFilteredProducts([]);
    }
  }


  React.useEffect(() => {
    filterProducts();
  }, [filters])

  return (
    <TableContainer style={{ overflow: 'scroll', height: '600px' }} component={Paper}>
      <Table  >
        <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(94, 23, 235, 0.8)' }}>
          <TableRow style={{ position: 'sticky', width: '100%' }} >
            <TableCell style={{ fontSize: '15px', color: 'white' }}>Serial No.</TableCell>
            <TableCell align="center" style={{ fontSize: '15px', color: 'white' }}>Image</TableCell>
            <TableCell>
              <ThemeProvider theme={theme}>

                <TextField onChange={(e) => {
                  setFilters({ ...filters, productName: e.target.value })
                }} style={{ width: '98%', color: 'white', borderColor: 'white' }}
                  color='error'
                  id="outlined-required"
                  label="Product Name"
                  defaultValue=""
                  InputLabelProps={{
                    style: { color: 'white' }, // Change the label color here
                  }}
                />
              </ThemeProvider>
            </TableCell>

            <TableCell align="center" style={{ fontSize: '15px', color: 'white' }}>Selling Price</TableCell>
            <TableCell align="center" style={{ fontSize: '15px', color: 'white' }}>Listing Price</TableCell>
            <TableCell>
              <ThemeProvider theme={theme}>
                <TextField onChange={(e) => {
                  setFilters({ ...filters, productDiscount: e.target.value })
                }} style={{ width: '98%' }}
                  id="outlined-required"
                  label="Discount"
                  defaultValue=""
                  type='number'
                  color='error'
                  InputLabelProps={{
                    style: { color: 'white' }, // Change the label color here
                  }}
                />
              </ThemeProvider>
            </TableCell>
            <TableCell>
            <ThemeProvider theme={theme}>
              <TextField onChange={(e) => {
              setFilters({ ...filters, productId: e.target.value })
            }} style={{ width: '98%' }}
              id="outlined-required"
              label="Product ID"
              defaultValue=""
              color='error'
              InputLabelProps={{
                style: { color: 'white' }, // Change the label color here
              }}
            />
            </ThemeProvider>
          </TableCell>

          <TableCell align="center" style={{ fontSize: '15px', color: 'white' }}>View/Edit</TableCell>

          {/* Add more header cells as needed */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Replace this sample data with your actual data */}
        {(filteredProducts.length !== 0 ? filteredProducts : productData).map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              <img height={'100px'} width={'70px'} src={image}></img>
            </TableCell>
            <TableCell align="center">{row.productName}</TableCell>
            <TableCell align="center">$250</TableCell>
            <TableCell align="center">$500</TableCell>
            <TableCell align="center">{row.productDiscount}%</TableCell>
            <TableCell align="center">{row.productId}</TableCell>
            <TableCell align="center"><Link to={'/admin/adminViewProduct'} style={{ fontSize: '12px', width: '60px', color: 'green', fontWeight: 'bold', borderBottom: '1px solid green' }}>View Product</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer >
  )
}
export default AdminDisplayAllProducts