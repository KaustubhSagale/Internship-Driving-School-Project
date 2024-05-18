
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Image, Text, VStack } from '@chakra-ui/react'

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

function Kaustubh(props) {
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

      if (response.ok) {
        setVisible(false);
        alert("Form is Submitted!");
        setAddress("");
        setAdhar("");
        setBirthDate("");
        setMobile("");
        setPan("");
        setName("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error Occurred!!");
      setAddress("");
      setAdhar("");
      setBirthDate("");
      setMobile("");
      setPan("");
      setName("");
    }
  };

  const handlePaymentInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/Payment", {
        method: "POST",
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

      if (response.ok) {
        console.log(response);
        setVisible(false);
        alert("Form is Submitted!");
        setAddress("");
        setAdhar("");
        setBirthDate("");
        setMobile("");
        setPan("");
        setName("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error Occurred!!");
      setAddress("");
      setAdhar("");
      setBirthDate("");
      setMobile("");
      setPan("");
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
          style={{ overflowY: "auto", maxHeight: "80vh" }} // Corrected 'style' here
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
                  {/* Your form elements here */}
                </div>
              )}
              {visiblePayment && (
                <div className="form-group">
                  {/* Your payment form elements here */}
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
                <PaymentComponent
                  amount={price}
                  img="path/to/image.jpg"
                  checkoutHandler={handlePaymentInfo}
                />
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
      {/* Your other JSX content here */}
    </div>
  );
}

const PaymentComponent = ({ amount, img, checkoutHandler }) => {
  const handlePayment = () => {
    checkoutHandler(amount);
  };

  return (
    <VStack>
      <Image src={img} boxSize={4} objectFit="cover" />
      <Text>₹{amount}</Text>
      <Button onClick={handlePayment}>Make Payment</Button>
    </VStack>
  );
};

export default Kaustubh;
