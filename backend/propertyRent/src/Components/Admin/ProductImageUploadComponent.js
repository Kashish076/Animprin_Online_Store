
import ImageUploaderComponent from './ImageUploaderComponent'
import '../../Home.css'
import { useState } from 'react'
const ProductImageUploadComponent = (props) => {
     const {image , setImage} = props;
  return (
    <div style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
                 <ImageUploaderComponent image = {image} setImage = {setImage}
                  />
                 
                </div>
  )
}
export default ProductImageUploadComponent