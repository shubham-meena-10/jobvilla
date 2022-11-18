import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProtectedRegis from './components/ProtectedRegis';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import ApplyJob from './components/ApplyJob';
import Internship from './components/Internship';
function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;