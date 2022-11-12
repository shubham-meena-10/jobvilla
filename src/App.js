import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom/dist';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ApiPost from './components/ApiPost'
import ProtectedRegis from './components/ProtectedRegis';
import ApiDashboard from './components/ApiDashboard'
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <NavBar /> */}
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />


        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />


        <Route path='/about' element={<About />} />
        <Route path='/dash' element={<Dashboard></Dashboard>} />
        <Route path='/contactus' element={<ContactUs />} />


        <Route path='/apipost' element={<ApiPost />} />
        <Route path='/apidashboard' element={<ApiDashboard />} />

        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;