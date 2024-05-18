// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

// function App() {
//   async function showRazorpay() {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const data = await fetch("http://localhost:1337/razorpay", {
//       method: "POST",
//     }).then((t) => t.json());

//     console.log(data);

//     const options = {
//       key: "rzp_test_0tpemkHKm5K1Bc",
//       currency: data.currency,
//       amount: data.amount.toString(),
//       order_id: data.id,
//       name: "Donation",
//       description: "Thank you for nothing. Please give us some money",
//       image: "http://localhost:1337/logo.svg",
//       handler: function (response) {
//         // alert(response.razorpay_payment_id);
//         // alert(response.razorpay_order_id);
//         // alert(response.razorpay_signature);

//         alert("Transaction successful");
//       },
//       prefill: {
//         name: "Rajat",
//         email: "rajat@rajat.com",
//         phone_number: "9899999999",
//       },
//     };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Razorpay payment portal ezzzz</p>
//         <a
//           className="App-link"
//           onClick={showRazorpay}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Pay now
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Razorpay from "razorpay";

// const PaymentButton = () => {
//   const [displayRazorpay, setDisplayRazorpay] = useState(false);

//   useEffect(() => {
//     const loadScript = async (src) => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//           resolve(true);
//         };
//         script.onerror = () => {
//           reject(new Error(`Failed to load script ${src}`));
//         };
//         document.body.appendChild(script);
//       });
//     };

//     const displayRazorpayPayment = async () => {
//       try {
//         const res = await axios.post("/order");
//         const { order_id, currency, amount } = res.data;

//         const options = {
//           key: "rzp_test_rE4fOKV9gqd1J2",
//           amount: amount.toString(),
//           currency,
//           name: "Ahen",
//           description: "Test Transaction",
//           image: "Your Logo URL",
//           order_id,
//           handler: async (response) => {
//             try {
//               const result = await axios.post("/payment", response);
//               alert(result.data.msg);
//             } catch (error) {
//               alert("Payment Failed");
//             }
//           },
//           prefill: {
//             name: "Kaustubh",
//             email: "kaustubhsagale007@gmail.com",
//             contact: "8482943210",
//           },
//           notes: {
//             address: "Pune",
//           },
//           theme: {
//             color: "#61dafb",
//           },
//         };

//         const paymentObject = new Razorpay(options);
//         paymentObject.open();
//       } catch (error) {
//         console.error("Failed to fetch order details:", error);
//         alert("Failed to initiate payment");
//       }
//     };

//     if (displayRazorpay) {
//       loadScript("https://checkout.razorpay.com/v1/checkout.js")
//         .then(() => {
//           displayRazorpayPayment();
//         })
//         .catch((error) => {
//           console.error("Failed to load Razorpay script:", error);
//           alert("Failed to load Razorpay script");
//         });
//     }
//   }, [displayRazorpay]);

//   return (
//     <div>
//       <button onClick={() => setDisplayRazorpay(true)}>Pay ₹500</button>
//     </div>
//   );
// };

// export default PaymentButton;

// require("dotenv").config();

// const app = require('express')();
// var http = require('http').Server(app);

// const paymentRoute = require('./routes/paymentRoute');

// app.use('/',paymentRoute);

// http.listen(3000, function(){
//     console.log('Server is running');
// });






import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card';

import axios from "axios";


const PaymentButton = () => {


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

    return (
        <Box className="
        "   style={{ position: 'fixed', top: '0', left: '0', width: '100%' }}>

            <Stack h={"100vh"} alignItems="center"  justifyContent="center" direction={["column", "row"]} className="custom-stack">

                <Card amount={500} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
                <Card amount={300} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default PaymentButton