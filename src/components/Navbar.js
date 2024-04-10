// src/components/Navbar.js
import React ,{ useState }from 'react';
import {
  Link,
  
} from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons/fa
import './Navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    // Pass the search term to the parent component
    // setSearchTerm(searchTerm.toLowerCase());
    console.log(searchTerm)
  };
  return (
     <div>
       {/* <BrowserRouter> */}
     <nav className="navbar">
       <div className="navbar-container">
          <div className="navbar-left">
           <Link to="/" className="navbar-logo">
             <img src="your_icon_url_here" alt="Icon" className="navbar-icon" />
             </Link>
             <p className="navbar-caption">Webinar Website</p>
         </div>
          <div className="navbar-right">
            <div className="navbar-links">
             <Link to="/" className="navbar-link">Home</Link>
             <Link to="/about" className="navbar-link">About</Link>
             <Link to="/faq" className="navbar-link">FAQ</Link>
             <Link to="/order-form" className="navbar-link">Order Form</Link>
             <Link to="/login-register" className="navbar-link">Login / Register</Link>
            </div>
            
       </div>
        
       </div>
    
    
       <div className="navbar-filter">
           <label htmlFor="filterDropdown" className="filter-label"> 
           Browse Courses: 
           <select id="filterDropdown" className="filter-dropdown">
             <option value="all">All</option>
             <option value="live">Live</option>
             <option value="download">Download</option>
             <option value="transcript">Transcript</option>
           </select>
           </label>
         <div className="navbar-search">
            <input type="text" placeholder="Search" className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

              <FaSearch className="search-icon"
              onClick={() => handleSearch()}>
                {/* <FaSearch className="search-icon" /> */}
              </FaSearch>
         </div>
         </div>
         </nav>
         
         </div>
    
      
    );
  }
        
    
 


export default Navbar;
