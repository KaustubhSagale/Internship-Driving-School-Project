import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from '../MyComponents/Carousel';
import About from '../MyComponents/About';
import GroupCards from '../MyComponents/GroupCards';
import Coursesoffer from '../MyComponents/Coursesoffer';
import Features from '../MyComponents/Features';
import Reviews from '../MyComponents/Reviews';
import ReactDOM from 'react-dom/client';
import LoginPage from './Login';

const Home = () => {
  // const [info,setInfo]=useState();
  // const fetchInfo=()=>{
  //   console.log("Fetching the api");
  //   let response={
  //     name:"Rutval",
  //     age:22
  //   };
  //   setInfo(response);
  // }
  // useEffect(() => {
  //   fetchInfo();
  //   console.log(info)
  // },[fetchInfo]);
  return (
    <div>
      {/* <p style={{color:"white"}}>{info}</p> */}
      

      <Carousel/>  
  
    

  <GroupCards/>
 

 <Coursesoffer/>



<Features/>



<Reviews/>
<About/>

    </div>
  )
}

export default Home
