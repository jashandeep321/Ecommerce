// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Components/Navbar';
import Menubar from './Components/Menubar';
import Main from './Components/Main';
import Signup from './Components/pages/Signup';
import Login from './Components/pages/Login';
import Footer from './Components/Footer';
import Men from './Components/Shop/Men';
import Cart from './Components/pages/cart';
import Women from './Components/Shop/Women';
import Kids from './Components/Shop/Kids';
import Profile from './Components/pages/Profile';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import React,{useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Product from './Components/pages/Product';
// import VerifyEmail from './Components/VerifyEmail';
import './App.css';

function App() {
  // const[name ,setName]=useState('')
  // const navigate= useNavigate()
  // useEffect(()=>{
  //   axios.get('http://localhost:8082/')
  //   .then(res=>{
  //     if(res.data.valid){
  //       setName(res.data.uname)
  //     }else{
  //       navigate('/login')
  //     }
  //     console.log(res)
  //   })
  //   .catch(err=> console.log(err))
  // },[])
  return (
    // <Router>
    // <div className="App">
    //    <Navbar />
    //    <Menubar/>
      
    //    <Routes>
    //    <Route path='/' element={<Main/>}/>
    //    <Route path="/Signup" element={<Signup />} />
    //    <Route path="/Login" element={<Login />} />
    //    {/* <Route path="/men" element={<ShopCategory category="men"/>}/> */}
    //    {/* <Route path="/women" element={<women/>}/>
    //    <Route path="/kid" element={<kid/>}/>
    //    <Route path="/product" element={<Product/>}/> */}

    //    <Route path="/Cart" element={<Cart/>}/>
    //    {/* <Route path="/ProductDisplay" element={<ProductDisplay />} /> */}
      
    //   {/* </Route> */}
    //   </Routes>
    //   <Main/>
    //   <Footer/>
    // </div>
    // </Router>
    <Router>
      <div className="App">
        <Navbar />
        <Menubar/>
        <Routes>
        <Route path="/signup" element={<Signup />} />
          <Route path='/' element={<Main/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Men" element={<Men/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Kids" element={<Kids/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          {/* <Route path="/ProductDisplay" component={ProductDisplay} element={<ProductDisplay />} /> */}
          {/* <Route path="/PD" element={<PD/>}/> */}
          <Route path="/ProductDisplay/:productID" element={<ProductDisplay />} />
          {/* <Switch> <Route path="/verifyemail" component={VerifyEmail} /></Switch> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
