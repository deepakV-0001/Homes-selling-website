import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Home/Nav/Nav';
import Home from './Components/Home/Home';
import HowItWorks from './Components/HowITWorks/HowItWorks';
import Footer from './Components/Footer/Footer'
import ForAgents from './Components/ForAgents/ForAgents';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import BlogSingle from './Components/Blog/BlogSingle/BlogSingle';
import Login from '../src/Components/Login/Login'
import Signup from './Components/Signup/Signup';
import { useState } from 'react';

function App() {
 
  return (
    
    <BrowserRouter>
     {/* <Nav/> */}
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/how-it-works" element={<HowItWorks/>}/>
      <Route path="/for-agents" element={<ForAgents/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/single-blog" element={<BlogSingle/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    
    
  );
}

export default App;
