import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

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
  const handleOpenLic = () => {
    setVisible(!visible);
  };
  const handleOpenPay=()=>{
    setVisible(!visible);
    setVisiblePayment(!visiblePayment)
  }
  const logout=()=>{
    logOut();
    console.log("Logging Out");
    navigate('/SignUp');
  }
  const handleLicenseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/License", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          mobileNumber: mobile,
          adharNumber: adhar,
          panNumber: pan,
          address: address,
          dataofBitrh: birthDate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle response here
      if (response) {
        setVisible(false);
        alert("Form is Submitted!");
        setAddress("");
        setAdhar();
        setBirthDate();
        setMobile();
        setPan();
        setName("");
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
  const handlePaymentInfo=async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/Payment", {
        method: "Payment",
        body: JSON.stringify({
          username: username,
          startDate: startDate,
          time: time,
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
        setVisible(false);
        alert("Form is Submitted!");
        setAddress("");
        setAdhar();
        setBirthDate();
        setMobile();
        setPan();
        setName("");
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
  }
  useEffect(() => {
    console.log(props.user);
    window.scrollTo(0, 0);
  }, []);
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
              {!visiblePayment && (
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
              )}
              {visiblePayment && (
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
              )}

              {!visiblePayment && (
                <button
                  className="btn btn-success"
                  onClick={handleLicenseSubmit}
                >
                  Submit
                </button>
              )}
              {visiblePayment && (
                <button onClick={handlePaymentInfo} className="btn btn-success">Make Payment</button>
              )}
            </form>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
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
              <strong>Nama</strong>:{props.user.displayName}
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
      <div className="website-info">
        <div className="cardUser shadow rounded p-4 my-4 d-flex flex-row">
          <div className="info col-md-6  text-center">
            <div className="my-auto">
              <h1>01</h1>
              <h2 className="m-0 p-0 text-white">Licence Section</h2>
              <p className="m-0 p-0">
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
        <div className="cardUser rounded shadow p-4 my-4 d-flex flex-row">
          <div className="img-div p-2 co-md-6">
            <img
              className="w-100 rounded h-75"
              src="bookSection.png"
              alt="Licence Image"
            />
          </div>
          <div className="info col-md-6  text-center">
            <div className="my-auto">
              <h1>02</h1>
              <h2 className="m-0 p-0 text-white">Book Section</h2>
              <p className="m-0 p-0">
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
      
    </div>
  );
}

export default UserPage;
