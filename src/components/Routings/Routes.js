import { BrowserRouter, Routes, Route } from 'react-router-dom/dist';
import About from '../AboutPage/About';
import Home from '../HomePage/Home';
import Login from '../LoginPage/Login';
import SignUp from '../SignUpPage/SignUp';
import Dashboard from '../../Container/Dashboard';
import ProtectedRegis from '../ProtectedPage/ProtectedRegis';
import ContactUs from '../ContactUs/ContactUs';
import Profile from '../ProfilePage/Profile';
import ApplyJob from '../ApplyJob/ApplyJob';
import Internship from '../InternshipPage/Internship';
import PageNotFound from '../../Container/PageNotFound';
import Practice1 from '../../Container/Practice/Practice1';
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
          <Route path='/profile' element={<ProtectedRegis><Profile /></ProtectedRegis>} />
          <Route path='/practice1' element={<Practice1 />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
