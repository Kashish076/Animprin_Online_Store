import AdminDisplayAllProducts from "../AdminComponents/AdminDisplayAllProducts"
import AdminNavComponent from "./AdminNavComponent"
const AdminGetAllProducts = () => {
  return (
    <div style={{display: 'flex'}}>
        <AdminNavComponent/>
        <AdminDisplayAllProducts/>
    </div>


  )
}
export default AdminGetAllProducts