import { BrowserRouter, Routes, Route } from 'react-router-dom/dist';
import About from '../AboutPage/About';
import Home from '../HomePage/Home';
import Login from '../LoginPage/Login';
import SignUp from '../SignUpPage/SignUp';
import Dashboard from '../../Container/Dashboard';
import ProtectedRegis from '../ProtectedPage/ProtectedRegis';
import ContactUs from '../ContactUs/ContactUs';
import ApplyJob from '../ApplyJob/ApplyJob';
import Internship from '../InternshipPage/Internship';
import PageNotFound from '../../Container/PageNotFound';
import AdminDash from '../../Container/AdminPage/AdminDash';
import AdminSignUp from '../../Container/AdminPage/AdminSignup';
import AdminLogin from '../../Container/AdminPage/AdminLogin';
import AdminProtected from '../../Container/AdminPage/AdminProtected';
function AllRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<ProtectedRegis><Home /></ProtectedRegis>} />
          <Route path='/' element={<SignUp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/internship' element={<ProtectedRegis><Internship /></ProtectedRegis>} />
          <Route path='/about' element={<ProtectedRegis><About /></ProtectedRegis>} />
          <Route path='/dash' element={<ProtectedRegis><Dashboard></Dashboard></ProtectedRegis>} />
          <Route path='/contactus' element={<ProtectedRegis><ContactUs /></ProtectedRegis>} />
          <Route path='/applyjob' element={<ProtectedRegis><ApplyJob /></ProtectedRegis>} />
          <Route path='/admindash' element={<AdminProtected><AdminDash /></AdminProtected>} />
          <Route path='/adminsignup' element={<AdminSignUp />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
