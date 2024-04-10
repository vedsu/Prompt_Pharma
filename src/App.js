 //src/App.js
import React , { useRef, useEffect }from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  //Import the Footer component
import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import WebinarList from './components/WebinarList';  //Import the WebinarList component
import About from './components/About';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import LoginRegister from './components/LoginRegister';

function App() {
  
  return (
    
    
     <div className="App">
       <header className="App-header">
         <Navbar/>
       </header>
       <main>
           
       <Routes>
             <Route path="/" element={<WebinarList/>} />
             <Route path="/about" element ={<About/>} />
             <Route path="/faq" element={<FAQ/>} />
             <Route path="/order-form" element={<OrderForm/>} />
             <Route path="/login-register" element={<LoginRegister/>} />
       </Routes>
          
      
       </main>
       <footer className='App-footer'>
       <Footer />
       </footer>
     </div>
    
    
  );
}
 

export default App;
