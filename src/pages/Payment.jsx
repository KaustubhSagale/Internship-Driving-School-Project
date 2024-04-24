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

import React, { useEffect, useState } from "react";
import axios from "axios";
import Razorpay from "razorpay";

const PaymentButton = () => {
  const [displayRazorpay, setDisplayRazorpay] = useState(false);

  useEffect(() => {
    const loadScript = async (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          reject(new Error(`Failed to load script ${src}`));
        };
        document.body.appendChild(script);
      });
    };

    const displayRazorpayPayment = async () => {
      try {
        const res = await axios.post("/order");
        const { order_id, currency, amount } = res.data;

        const options = {
          key: "YOUR_RAZORPAY_KEY_ID",
          amount: amount.toString(),
          currency,
          name: "Your Company Name",
          description: "Test Transaction",
          image: "Your Logo URL",
          order_id,
          handler: async (response) => {
            try {
              const result = await axios.post("/payment", response);
              alert(result.data.msg);
            } catch (error) {
              alert("Payment Failed");
            }
          },
          prefill: {
            name: "User's Name",
            email: "User's Email",
            contact: "User's Contact Number",
          },
          notes: {
            address: "User's Address",
          },
          theme: {
            color: "#61dafb",
          },
        };

        const paymentObject = new Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error("Failed to fetch order details:", error);
        alert("Failed to initiate payment");
      }
    };

    if (displayRazorpay) {
      loadScript("https://checkout.razorpay.com/v1/checkout.js")
        .then(() => {
          displayRazorpayPayment();
        })
        .catch((error) => {
          console.error("Failed to load Razorpay script:", error);
          alert("Failed to load Razorpay script");
        });
    }
  }, [displayRazorpay]);

  return (
    <div>
      <button onClick={() => setDisplayRazorpay(true)}>Pay ₹500</button>
    </div>
  );
};

export default PaymentButton;
