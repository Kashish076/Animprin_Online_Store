import './ComponentStyles/AddressAddButton.css'
const AddressAddButton = ({onpress , BtnName, styles}) => {
  return (
    <button style={{...styles}} type="button" onClick={onpress} className="Btn" >{BtnName}</button>
  )
}
export default AddressAddButton