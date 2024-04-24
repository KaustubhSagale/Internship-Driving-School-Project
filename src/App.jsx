import React from 'react';
import logo from './logo.svg';



import LoginPage from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import WelcomePage from './MyComponents/WelcomeToDashboard.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/Login.jsx';
import './App.css';
import axios from 'axios';
import LineChart from './MyComponents/LineChart.jsx';
import Carousel from './MyComponents/Carousel.jsx';
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import GroupCards from './MyComponents/GroupCards.jsx';
import Cards from './MyComponents/Cards.jsx';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Coursesoffer from './MyComponents/Coursesoffer.jsx';
// import About from './MyComponents/About.jsx';
import Features from './MyComponents/Features.jsx';
import Reviews from './MyComponents/Reviews.jsx';
 import Navigation from './MyComponents/Header.jsx';
import MyLocation from './MyComponents/MyLocation.jsx';
import Home from './pages/Home.jsx';
import Location from './pages/Location';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Dashboard from './MyComponents/Dashboard.jsx';
import Footer from './MyComponents/Footer.jsx';
import UserPage from './pages/UserPage.jsx';
const App = () => {

  return (
    <>

   <div>
    <Router>
    <Navigation/>
    <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} /> */}
            <Route path="/pages/Location" element={<Location/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="About" element={<About/>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route  path="/SignUp" element={<SignUp/>} /> 
            <Route  path="/UserProfile" element={<UserPage/>} /> 
            <Route  path="/welcome" element={<WelcomePage/>} /> 
          </Routes>
         
          </Router>
          </div>

          <Footer/>
    {/* <Carousel/>  
  
    

    <GroupCards/></div>
   

   <Coursesoffer/>



<Features/>



<Reviews/>
<About/>
<div className="App">
      <MyLocation />
    </div>
 */}


</>


  );
}
export default App;

// // export default App;
// // App.js
// // import React, { useRef } from "react";
// // import './App.css';
// // import Scroll from "./Scroll";
// // import Carousel from './MyComponents/Carousel';
// // import CardGroup from 'react-bootstrap/CardGroup';
// // import GroupCards from './MyComponents/GroupCards';
// // import Cards from './MyComponents/Cards';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import Coursesoffer from './MyComponents/Coursesoffer';
// // import About from './MyComponents/About';
// // import Features from './MyComponents/Features';
// // import Reviews from './MyComponents/Reviews';

// // const App = () => {
// //   const scrollRef = useRef();

// //   return (
// //     <>
// //       <Scroll scrollRef={scrollRef} />
// //       <div ref={scrollRef}>
// //         <Carousel />
// //         <GroupCards />
// //       </div>
// //       <Coursesoffer />
// //       <Features />
// //       <Reviews />
// //       <About />
// //       <Cards />
// //     </>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Carousel from './MyComponents/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
// import GroupCards from './MyComponents/GroupCards';
// import Coursesoffer from './MyComponents/Coursesoffer';
// import About from './MyComponents/About';
// import Features from './MyComponents/Features';
// import Reviews from './MyComponents/Reviews';
// import Navigation from './MyComponents/Header.jsx';
// import MyLocation from './MyComponents/MyLocation.jsx';
// import Location from './pages/Location';

// const App = () => {
//   return (
//     <>
//       <div>
//       <Router>
//           <Navigation />
//           <Routes>
//             <Route path="" element={<Location />} />
            
//           </Routes>
//         </Router>
//         <Carousel />
//         <GroupCards />
//       </div>
//       <Coursesoffer />
//       <Features />
//       <Reviews />
//       <About />
//       <div className="App">
//         <MyLocation />
//       </div>
//     </>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // import Carousel from './MyComponents/Carousel';
// // import CardGroup from 'react-bootstrap/CardGroup';
// // import GroupCards from './MyComponents/GroupCards';
// // import Cards from './MyComponents/Cards';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// import Coursesoffer from './MyComponents/Coursesoffer';
// import About from './MyComponents/About';
// import Features from './MyComponents/Features';
// import Reviews from './MyComponents/Reviews';
// import Navigation from './MyComponents/Header.jsx';
// import MyLocation from './MyComponents/MyLocation.jsx';
// import Location from './pages/Location';
// // import Header from './MyComponents/Header.jsx'
// const App = () => {
//   return (
//     <> 
//       <div>
       
//         <Router>
          
//         <div>
//         {/* Your other components/routes */}
//         <Route path="/Users/kaustubhsagale/Desktop/carproject/src/pages/Location.jsx" component={<Navigation/>} />
//         {/* <Route path="/page2" component={Page2Component} /> */}
//         {/* Add more routes as needed */}
//       </div>
//         </Router>
//       </div>

//       <Coursesoffer />
//       <Features />
//       <Reviews />
//       <About />
//       <div className="App">
//         <MyLocation />
//       </div>
//     </>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Carousel from './MyComponents/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
// import GroupCards from './MyComponents/GroupCards';
// import Cards from './MyComponents/Cards';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import Coursesoffer from './MyComponents/Coursesoffer';
// import About from './MyComponents/About';
// import Features from './MyComponents/Features';
// import Reviews from './MyComponents/Reviews';
// import Navigation from './MyComponents/Header.jsx';
// import MyLocation from './MyComponents/MyLocation.jsx';
// import Location from './pages/Location';
// import { Carousel } from 'react-bootstrap';
// // import Header from './MyComponents/Header.jsx'
// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navigation />
//         <Routes>
//         <Route path="/carousel" element={<Carousel />} />
//                   <Route path="/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/Carousel.jsx" element={<Carousel />} />
         
//         </Routes>
//       </Router>
//       <div className="App">
//         <MyLocation />
//       </div>
//     </>
//   );
// };

// export default App;