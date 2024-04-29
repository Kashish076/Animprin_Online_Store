import { BsCloudUpload } from 'react-icons/bs';
import * as React from 'react';
import { useState } from 'react';
import Skeleton  from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


const ImageUploaderComponent = (props) => {
  const {image,setImage} = props;
  const [loading, setLoading] = React.useState(false);


  const uploadImageHandler = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'nlipmxsu'); 
    data.append('cloud_name', 'deumuo4ko'); 
    try {
      setLoading(true);
      const response = await fetch('https://api.cloudinary.com/v1_1/deumuo4ko/image/upload', {
        method: 'post',
        body: data
      });

      if (!response.ok) {
        alert('Failed to upload image');
        setLoading(false);
      }

      const responseData = await response.json();
      setImage(responseData.secure_url);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      return ''; 
    }
  };

  return (
    <>
      <h6>Select Image</h6>
      {loading ? <Box
      sx={{
        bgcolor: 'whitesmoke',
        width: '100%',
        marginBottom : "10px",
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="square"
        width={300}
        height={300}
      />
    </Box> : image && (
        <img style={{ border: '1px dashed black', height: '300px', width: '300px',marginBottom : "10px", }} src={image} alt="Selected Image" />)}

      <div className='Upload_Image_Container'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '99%' }}>
          <BsCloudUpload className="upload_Image" />
          <p style={{ fontWeight: '600', color: 'grey' }}>Drop images or click here to select new images</p>
          <input
            onChange={(e) => {uploadImageHandler(e.target.files[0])}}
            type="file"
            value='' 
          />
        </div>
      </div>
    </>
  );
};

export default ImageUploaderComponent;
