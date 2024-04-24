
import React from 'react'
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Header.css';
// import './Header.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from '../pages/Login';
const Navigation = () => {
  return (
    
      <nav className='nn'>
      <div className="logo  ">
      <img className='kkkq' src={process.env.PUBLIC_URL + '/1.png'} alt="logol" />
        
      

</div>
<ul className="grid">
<li>
      <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="./pages/Location">Location</Link>
    </li>

    <li>
    <Link to="./About">About</Link>
    </li>

    <li>
    <Link to="/ContactUs">ContactUs</Link>
    </li>
  {/* <li><a href="#"className='e'>About</a></li>
  <li><a href="#"className='e'>ContactUs</a></li> */}

</ul>
{/* <button>Login</button> */}
<ul>
<Link to="/SignUp">
        <button >SignUp</button>
      </Link>
<Link to="/Login">
        <button >Login</button>
      </Link>
      </ul>

    </nav>
    
  )
}

export default Navigation
