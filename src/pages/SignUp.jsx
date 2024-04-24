// import React, { useState } from "react";
// import { auth } from "./firebase";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/compat/auth";
// import {
//   signInWithEmailAndPassword,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [signInMethod, setSignInMethod] = useState("email");
//   const [OTPsent, setOTPsent] = useState(false);

//   const recaptchaVerifier = React.useRef(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleVerificationCodeChange = (e) => {
//     setVerificationCode(e.target.value);
//   };

//   const handleSignInWithEmail = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       // Handle successful sign-in
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   const handleSignInWithPhoneNumber = async (e) => {
//     e.preventDefault();
//     try {
//       recaptchaVerifier.current = new RecaptchaVerifier("recaptcha-container", {}, auth);
//       const phoneProvider = new firebase.auth.PhoneAuthProvider();
//       const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
//       setOTPsent(true);
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   const handleConfirmationCode = async (e) => {
//     e.preventDefault();
//     try {
//       const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
//       await firebase.auth().signInWithCredential(credential);
//       // Handle successful sign-in
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <>
//       <form>
//         {signInMethod === "email" && (
//           <>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </>
//         )}
//         {signInMethod === "phone" && (
//           <>
//             <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
//           </>
//         )}
//         <button onClick={(e) => setSignInMethod(signInMethod === "email" ? "phone" : "email")}>
//           Switch to {signInMethod === "email" ? "Phone Number" : "Email"}
//         </button>
//         {signInMethod === "email" && <button onClick={handleSignInWithEmail}>Sign In</button>}
//         {signInMethod === "phone" && OTPsent && (
//           <>
//             <input type="text" placeholder="Verification Code" value={verificationCode} onChange={handleVerificationCodeChange} />
//             <button onClick={handleConfirmationCode}>Confirm OTP</button>
//           </>
//         )}
//         {signInMethod === "phone" && !OTPsent && (
//           <button onClick={handleSignInWithPhoneNumber}>Send OTP</button>
//         )}
//       </form>
//       <div id="recaptcha-container"></div>
//     </>
//   );
// };

// export default SignUp;
import MyAppComponent from "../MyComponents/MyAppComponent";
import React from 'react'
import { UserAuthContextProvider } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx'; // Relative import path
import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';

const SignUp = () => {
  return (
    <div>
<UserAuthContextProvider>
    <MyAppComponent />
</UserAuthContextProvider>
    </div>
  )
}

export default SignUp
