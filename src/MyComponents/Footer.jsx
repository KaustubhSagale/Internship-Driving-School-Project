import React from 'react'
import { Container } from 'react-bootstrap'
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Footer.css';
const Footer = () => {
  return (
   
      <Container className='ftr'>
  <meta charSet="UTF-8" />
  <title>Ahen</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <link rel="stylesheet" href="./style.css" />
  {/* partial:index.partial.html */}
  <footer>
    <div className="content" >
      <div className="topp">
        <div className="logo-details">
          <i className="k" />
          <span className="logo_name">Ahen</span>
        </div>
        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Get started</a>
          </li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li>
            <a href="#">Instructor Training</a>
          </li>
          <li>
            <a href="#">Video Courses</a>
          </li>
          <li>
            <a href="#">Get License</a>
          </li>
          <li>
            <a href="#">Traffic Guideline</a>
          </li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">My account</a>
          </li>
          <li>
            <a href="#">Prefrences</a>
          </li>
          <li>
            <a href="#">Purchase</a>
          </li>
        </ul>
        <ul className="box">
          <li className="link_name">Courses</li>
          <li>
            <a href="#">Two Wheeler Training</a>
          </li>
          <li>
            <a href="#">Four Wheeler Training</a>
          </li>
          <li>
            <a href="#">Other Courses</a>
          </li>
          <li>
            <a href="#">Refresher Four Wheeler Training</a>
          </li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li>
            <input type="text" placeholder="Enter your email" />
          </li>
          <li>
            <input type="button" defaultValue="Subscribe" />
          </li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">
          Copyright © 2024 <a href="#">Ahen</a>All rights reserved
        </span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms &amp; condition</a>
        </span>
      </div>
    </div>
  </footer>
  </Container>

  )
}

export default Footer
