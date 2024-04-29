import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import '../Home.css'
import { FaAmazon } from 'react-icons/fa';
import fkticon from '../images/fkt.png'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
export default function ImgMediaCard(props) {
    const { product } = props;

    const [leftPlatforms, setLeftPlatforms] = useState([]);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value );
    };

    useEffect(() => {
      const platforms = product.allPlatforms.filter(
        (platform) => platform.platformName !== 'Amazon' && platform.platformName !== 'Flipkart'
      );
      setLeftPlatforms(platforms);
    }, [product.allPlatforms]);

    return (
        <div 
         className='ProductCard'>
                        <a href={product.allPlatforms[0].link}>

            <div  className='ImageComponent'>
                <img style = {{height : '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}className='ImageSize' src={product.imageUrl} alt='Nothing to Show' />
            </div>
            </a>

            <CardContent className='cardBottomComp'>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center'
                }}>
                </div>
                <div className='cardDetails'>

                    <text className='textStyle2' style={{ lineHeight: 1.2, marginBottom: '5px', marginTop: '5px', fontWeight: '600', width: '100%'}}>{product.name}</text> 
                </div>

                <div className='Card_Bottom textStyle3'>
                          BUY NOW :
                    {product.allPlatforms.map((platform, index) => (
            platform.platformName === 'Amazon' ? (
              <a key={index} href={platform.link}>
              <Button  style={{ backgroundColor: '#D6B610',height: '29px' }}>
                
                  <FaAmazon color='black' />
              </Button>
              </a>

            ) : platform.platformName === 'Flipkart' ? (
              <a key={index} href={platform.link}><Button  style={{ backgroundColor: '#D6B610', height: '29px' }}>
              <img height={15} width={15} src={fkticon} alt="Flipkart" />
            </Button></a>
            ) : null
          ))}  


                    <Box sx={{ width: 70}}>
      <FormControl fullWidth>
        <InputLabel style={{fontSize: '12px', maxHeight: '20px'}} id="demo-simple-select-label"> Others</InputLabel>
        <Select style={{color : "white",  height: '30px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {leftPlatforms?.map((plat,idx) => (
             <MenuItem key={idx} value={10}><a href={plat.link}>{plat.platformName}</a></MenuItem>
          ))}
         
        </Select>
      </FormControl>
    </Box>
                    

                   
                    
                  
                </div>
            </CardContent>
        </div>
    );
}