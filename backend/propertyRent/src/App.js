import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminPage from './Pages/Admin/adminPage';
import AdminCreateNewProduct from './Components/Admin/AdminCreateNewProduct';
import AdminGetAllProducts from './Components/Admin/AdminGetAllProducts';
import AdminViewAndEditproduct from './Components/Admin/AdminViewAndEditproduct';
import AdminEditAdminPage from './Components/Admin/AdminEditAdminPage';
import TermsAndConditions from './Pages/TermsAndConditions';
import PP from './Pages/PP';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        // Admin Page routes
        <Route path='/admin'  element = {<AdminPage/>}/>
        {/* <Route path='/admin/adminGetAllUsers'  element = {<AdminAllUsersData/>}/> */}
        <Route path='/admin/adminGetAllProducts'  element = {<AdminGetAllProducts/>}/>
        <Route path='/admin/createNewProduct'  element = {<AdminCreateNewProduct/>}/>
        {/* <Route path='/admin/adminDeliveredOrders'  element = {<AdminDeliveredOrders/>}/> */}
        {/* <Route path='/admin/adminGetAllOrders'  element = {<AdminGetOrders/>}/> */}
        {/* <Route path='/admin/adminReturnedOrders'  element = {<AdminReturnedOrders/>}/> */}
        {/* <Route path='/admin/totalSalesInsights'  element = {<TotalSalesInsights/>}/> */}
        {/* <Route path='/admin/adminUpdateUser'  element = {<AdminUpdateUser/>}/> */}
        {/* <Route path='/admin/adminViewProduct'  element = {<AdminViewAndEditproduct/>}/> */}
        {/* <Route path='/admin/OrderDetails'  element = {<AdminOrderDetailsPage/>}/> */}
        {/* <Route path='/admin/EditUser'  element = {<AdminEditUserPage/>}/> */}
        {/* <Route path='/admin/EditAdmin'  element = {<AdminEditAdminPage/>}/> */}
        <Route path='/Terms'  element = {<TermsAndConditions/>}/>
        <Route path='/PrivacyPolicy'  element = {<PP/>}/>
        <Route path='/Contact'  element = {<ContactUs/>}/>
        <Route path='/about'  element = {<AboutUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
