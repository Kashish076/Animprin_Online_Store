

import * as React from 'react';
import image from '../images/animprin.png'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BsSnapchat } from 'react-icons/bs';
import { Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useCategoryState } from '../Context/CategoryProvider';


const Navbar = () => {
  const [category, setCategory] = useState('');
  const [allCategories, setAllCategories] = React.useState([]);
  const {setCategoySelected} = useCategoryState();

  const handleChange = (event) => {
    setCategory(event.target.value);
    setCategoySelected(event.target.value);
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/apiRoutes/fetchCategories');
      setAllCategories(response.data.data);
    } catch {
      alert('something went wrong')
    }
  }
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  React.useEffect(()=>{
    fetchCategories();
  },[])

  React.useEffect(() => {
      setCategoySelected(category)
  },[category]);


  return (
    <>
      <div className="Navbar_Outer">
        <div className="Navbar_Inner">
          <div>
          <Link onClick = {handleScrollToTop} to = "/" className='footer_link'><img height={'100px'} width={'120px'} src={image}>
            </img></Link>

            
          </div>
          <div style={{ display: 'flex', width: '120px', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={'https://www.instagram.com/animprin.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
              <FiInstagram style={{ fontSize: '25px', color: 'purple', cursor: 'pointer' }} /></Link>
              <Link to={'https://www.youtube.com/channel/UCPFPI-zXGa1dDj80wcIDV3w'}><FiYoutube style={{ fontSize: '25px', color: 'purple', cursor: 'pointer' }} />
            </Link>
            <Link to={'https://www.snapchat.com/add/animprin?share_id=QhU_rRY5_JU&locale=en-IN'}><BsSnapchat style={{ fontSize: '25px', color: 'purple', cursor: 'pointer' }} />
            </Link>
            
          </div>


        </div>
      </div>
      <div className="Navbar_Outer2">
        <div className="Navbar_Inner2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Categories</InputLabel>
              <Select style={{ color: "white" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
              >
                
                {allCategories.map((category,idx) => (
                  <MenuItem key={idx} value = {category.name}>
                  {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>

  )
}



export default Navbar;