import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Image, Text, VStack } from '@chakra-ui/react'
import axios from "axios";
import "/Users/kaustubhsagale/Desktop/carproject/src/styles/UserProfile.css";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useUserAuth } from "../Contexts/UserAuthContext";
import Map from "../MyComponents/Map";
function UserPage(props) {
  const [visible, setVisible] = useState(false);
  const [visiblePayment, setVisiblePayment] = useState(false);
  const[showCards,setShowCards]=useState(false);
  const { user , logOut} = useUserAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState(props.user.email);
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("6-8");
  const [place, setPlace] = useState("Pune");
  const [price, setPrice] = useState();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [adhar, setAdhar] = useState();
  const [pan, setPan] = useState();
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState();
  const nevigate=useNavigate();
  const handleOpenLic = () => {
    setVisible(!visible);
  };
  const handleOpenPay=()=>{
    window.scrollTo(0, 0);

    setVisiblePayment(true)
  }


  
  const logout=()=>{
    logOut();
    console.log("Logging Out");
    navigate('/SignUp');
  }

  const handleLicenseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/contaacts", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          mobile_number: mobile,
          adhar_number: adhar,
          pan_number: pan,
          address: address,
          date_of_birth: birthDate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle response here
      if (response) {
        if(response.status==201){
          setVisible(false);
          alert("Form is Submitted!");
          setAddress("");
          setAdhar();
          setBirthDate();
          setMobile();
          setPan();
          setName("");
          
        }
        else{
          alert("Something Wrong Happened")
        }
        
      }
    } catch (error) {
      // Error handling
      console.error("Error:", error);
      alert("Error Occoured!!");
      setAddress("");
      setAdhar();
      setBirthDate();
      setMobile();
      setPan();
      setName("");
    }
  };
  // const handlePaymentInfo = async ({ amount, img, checkoutHandler }) => {
  //   return (
  //       <VStack>
  //           <Image src={img} boxSize={"64"} objectFit="cover" />
  //           <Text>₹{amount}</Text>
  //           <Button onClick={() => checkoutHandler(amount)}>Make Payment</Button>
  //       </VStack>
  //   )
  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount

    })
    console.log(amount)


    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Ahen",
        description: "Tutorial of RazorPay",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqooDEZMX_ab1soKhZR844Irfq7_FcUDUhfQ&usqp=CAU",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Kaustubh Sagale",
            email: "kaustubhsagale007@gmail.com",
            contact: "8482943210"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}
  const handlePaymentInfo=async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/payment", {
        method: "POST",
        body: JSON.stringify({
          username: "username",
          date: startDate,
          timing: time,
          place: place,
          price: price,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle response here
      if (response) {
        console.log(response)
        if(response.status===201){
          setVisible(false);
          alert("Form is Submitted! Nevigatting To Payment Page");
          setVisiblePayment(false)
          checkoutHandler(price)
          window.scrollTo(0,0)
          //nevigate('/Payment')
          setUsername("");
          setStartDate();
          setTime()
          setPlace('')
          setPrice();
        }
        else{
          alert("Error While Submitting Form")
        }
      }
    } catch (error) {
      // Error handling
      console.error("Error:", error);
      alert("Error Occoured!!");
      setUsername("");
      setStartDate();
      setTime()
      setPlace('')
      setPrice();
    }
  }
 
  return (
    <div className="containerii ">
      <div className="modal-here">
        <CModal
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="LiveDemoExampleLabel"
          backdrop="static"
          tyle={{ overflowY: "auto", maxHeight: "80vh" }}
        >
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle id="LiveDemoExampleLabel">
              Get License Section
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <form>
                <div>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                      id="mobileNumber"
                      className="form-control"
                      type="tel"
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter Mobile Number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      id="dateOfBirth"
                      className="form-control"
                      type="date"
                      onChange={(e) => setBirthDate(e.target.value)}
                      placeholder="Date Of Birth"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      id="address"
                      className="form-control"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address Here"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="panNumber">PAN Number</label>
                    <input
                      id="panNumber"
                      className="form-control"
                      type="text"
                      onChange={(e) => setPan(e.target.value)}
                      placeholder="PAN Number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="adharNumber">Adhar Number</label>
                    <input
                      id="adharNumber"
                      className="form-control"
                      type="number"
                      onChange={(e) => setAdhar(e.target.value)}
                      placeholder="Adahar Number Here"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-success"
                  onClick={handleLicenseSubmit}
                >
                  Submit
                </button>
            </form>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
      <div className="modal-here">
      <CModal
          visible={visiblePayment}
          onClose={() => setVisiblePayment(false)}
          aria-labelledby="LiveDemoExampleLabel"
          backdrop="static"
          tyle={{ overflowY: "auto", maxHeight: "80vh" }}
        >
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle id="LiveDemoExampleLabel">
              Book the Session
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <form>
            <div className="form-group">
                  <label htmlFor="Username" >Username</label>
                  <input className="form-control" value={props.user.email} type="text" readOnly />
                  
                  <label htmlFor="">Price</label>
                  <input className="form-control" type="text" value={price} readOnly />

                  <label htmlFor="">Start Date</label>
                  <input className="form-control" type="date" placeholder="Star Date Here" onChange={(e)=>{
                    setStartDate(e.target.value)
                  }} />

                  <label htmlFor="">Select The Timing to Learn</label>
                  <select className="form-control" name="" id="" onChange={(e)=>{
                    setTime(e.target.value)
                  }}>
                    <option value="">1-3</option>
                    <option value="">3-5</option>
                    <option value="">6-9</option>
                  </select>
                    <br />
                  <label htmlFor="">Place to Learn</label>
                  <select className="form-control" name="" id="" onChange={(e)=>{
                    setPlace(e.target.value)
                  }}>
                    <option value="">Shivaji Nagar</option>
                    <option value="">PCMC</option>
                    <option value="">Viman Nagar</option>
                    <option value="">Swargate</option>
                  </select>
                </div>
                  
                <button
                  className="btn btn-success"
                  onClick={handlePaymentInfo}
                >
                  Make Payment
                </button>
            </form>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisiblePayment(false)}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
      <div className="user-profile d-flex my-3 flex-row">
        <div className="image-ssec col-md-6 text-center ">
          <img className="user-image" src="userImage.png" alt="User Image" />
        </div>
        <div className="info-div my-auto  p-auto col-md-5">
          <div className="my-auto mx-auto text-center">
            <h3 className="m-0 p-1">
              <strong>Name</strong>:{props.user.displayName}
            </h3>
            <h3 className="m-0 p-1">
              <strong>Username</strong> : {props.user.email}
            </h3>
          </div>
          <div className=" w-100 my-3 d-flex flex-row text-center">
            <button className="btn   rounded shadow w-75 mx-1 btn-secondary">
              Edit Profile
            </button>
            <button className="btn   rounded shadow w-75 mx-1 btn-danger" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="website-info ">
        <div className="cardUser shadow rounded p-4 my-4 d-flex flex-row border">
          <div className="info col-md-6  text-center">
            <div className="my-auto">
              <h1>01</h1>
              <h2 className="m-0 p-0 text-white">Licence Section</h2>
              <p className="m-0 p-0 lo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Sunt, suscipit.Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Sunt, suscipit.
              </p>
              <div className="text-center my-2">
                <button
                  className="btn rounded w-50 btn-success"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    handleOpenLic();
                  }}
                >
                  Get Licence
                </button>
              </div>
            </div>
          </div>
          <div className="img-div p-2 co-md-5">
            <img
              className="w-100 rounded h-100"
              src="drivingLicence.webp"
              alt="Licence Image"
            />
          </div>
        </div>
        <div className="cardUser  rounded  border shadow p-4 my-4 d-flex flex-row">
          <div className="img-div  h-50 co-md-6">
            <img
              className="rounded "
              id="tt"
              src="bookSection.png"
              alt="Licence Image"
            />
          </div>
          <div className="info col-md-6   text-center">
            <div className="my-auto">
              <h1>02</h1>
              <h2 className="m-0 p-0 text-white">Book Section</h2>
              <p className="m-0 p-0 lo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Sunt, suscipit.Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Sunt, suscipit.
              </p>
              <div className="text-center my-2">
                <button className="btn rounded w-50 btn-success" onClick={()=>{
                    setShowCards(!showCards);
                }}>
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="cardUser shadow rounded p-4 my-4 d-flex flex-row border">
          <div className="info col-md-6  text-center">
            <div className="my-auto">
              <h1>03</h1>
              <h2 className="m-0 p-0 text-white">How to Learn Driving</h2>
              <p className="m-0 p-0 lo">
     <ul className="py-2">
  <li>Virtual Driving Simulator: Practice basic maneuvers in a realistic virtual environment.</li>
  <li>Interactive Quizzes: Test knowledge of road signs, traffic laws, and safe driving practices.</li>
  <li>Driving Challenges: Navigate scenarios like parallel parking or merging onto a highway.</li>
  <li>Online Courses: Cover theoretical knowledge, practical skills, and defensive driving techniques.</li>
</ul>

              </p>
              <div className="text-center my-2">
               
              </div>
            </div>
          </div>
          <div className="img-div p-2 co-md-5">
            <img
              className="w-100 rounded h-100"
              src="https://northwestdrivingschool.com/wp-content/uploads/2022/06/8-Benefits-Of-Learning-To-Drive-Why-Driving-Lessons-Are-Worth-It.webp"
              alt="Licence Image"
            />
          </div>
          
        </div> */}


      {
        showCards &&
        <div className="cardBody col-md-12 d-flex flex-row">
        <div className="cardHere border rounded w-50 m-1 p-3">
          <h1>Daily Plan...</h1>
          <h3>800Rs</h3>
          <div className="para-info">
            <ul className="text-white">
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
            </ul>
          </div>
          <button className="btn btn-secondary"
          onClick={() => {
            setPrice(800)
            window.scrollTo(0, 0);
            handleOpenPay()
        }}
        >Book The Session Now</button>
        </div>
        <div className="cardHere border w-50 m-1 p-3 rounded">
          <h1>Monthly Plan...</h1>
          <h3>1200Rs</h3>
          <div className="para-info">
            <ul className="text-white">
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
              <li>lorem here lorem here</li>
            </ul>
            
  
          </div>
          <button
            onClick={() => {
              setPrice(1200)

                window.scrollTo(0, 0);
                handleOpenPay()
            }}
            className="btn btn-secondary"
          >
            Book The Session Now
          </button>
        </div>
      </div>
      }
   
        <div className="cardUser shadow rounded p-4 my-4 d-flex flex-row border">
          <div className="info col-md-6  text-center">
            <div className="my-auto">
              <h1>03</h1>
              <h2 className="m-0 p-0 text-white">How to Learn Driving</h2>
              <p className="m-0 p-0 lo">
     <ul className="py-2">
  <li>Virtual Driving Simulator: Practice basic maneuvers in a realistic virtual environment.</li>
  <li>Interactive Quizzes: Test knowledge of road signs, traffic laws, and safe driving practices.</li>
  <li>Driving Challenges: Navigate scenarios like parallel parking or merging onto a highway.</li>
  <li>Online Courses: Cover theoretical knowledge, practical skills, and defensive driving techniques.</li>
</ul>

              </p>
              <div className="text-center my-2">
               
              </div>
            </div>
          </div>
          <div className="img-div p-2 co-md-5">
            <img
              className="w-100 rounded h-100"
              src="https://northwestdrivingschool.com/wp-content/uploads/2022/06/8-Benefits-Of-Learning-To-Drive-Why-Driving-Lessons-Are-Worth-It.webp"
              alt="Licence Image"
            />
          </div>
          
        </div>
        <div><Map/></div>
    </div>
  );
}


export default UserPage;
