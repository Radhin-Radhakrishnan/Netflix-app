import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';
import Login from './Components/Login/Login';
import './Styles/Navbar.css';
import './Styles/Login.css';
import './Styles/LandingPage.css';
import './Styles/NavbarLand.css';
import './Styles/Mainview.css';
import './Styles/MainNav.css';
import './App.css'
import './Styles/RowCards.css';
import './Styles/Features.css';
import NavbarLand from './Components/Landing Page/NavbarLand'
import NavbarLogin from './Components/Login/NavbarLogin';
import MainView from './Components/Main Pages/MainView';
import MainNavbar from './Components/Main Pages/MainNavbar';
import RowCards from './Components/Main Pages/RowCards';
import Features from './Components/Main Pages/Features';
import Footer from './Components/Main Pages/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Nav' element={<NavbarLand/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Navbar' element={<NavbarLogin />} />
        <Route path='/Main' element={<MainView/>} />
        <Route path='/MainNav' element={<MainNavbar/>} />
        <Route path='/RowCards' element={<RowCards/>} />
        <Route path='/fea' element={<Features/>} />
        <Route path='/foot' element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;

