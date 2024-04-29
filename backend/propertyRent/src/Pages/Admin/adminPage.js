import AdminNavComponent from "../../Components/Admin/AdminNavComponent";
import AdminPageBody from "../../Components/Admin/AdminPageBody";
export default function AdminPage() {
  return (
    <div style={{display: 'flex'}}>
     <AdminNavComponent/>
     <AdminPageBody/>
</div>
  );
}