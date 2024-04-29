
import { TextField } from "@mui/material";
import './ComponentStyles/CustomInputTextFieldComponent.css'
const CustomTextFieldComponent = ({
    label,defaultValue,OnChange
}) => {
  return (
    <TextField  
    style={{marginBottom: '10px', marginTop: '10px', marginLeft: '5px'}}
    className="CustomInputTextField"
    onChange={OnChange}
    required = {true}
    label={label}
    defaultValue={defaultValue}
  />
  )
}
export default CustomTextFieldComponent