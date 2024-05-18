// import React from 'react';

// import UserAuthContext from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// function MyAppComponent() {
//     const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//       logIn(email, password);
//     };

//     const handleSignup = () => {
//       signUp(email, password);
//     };

//     return (
//       <div>
//         <h1>Welcome to My App</h1>
//         {user ? (
//           <div>
//             <p>Hello, {user.displayName || user.email}!</p>
//             <button onClick={logOut}>Log Out</button>
//           </div>
//         ) : (
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Log In</button>
//             <button onClick={handleSignup}>Sign Up</button>
//             <button onClick={googleSignIn}>Sign In with Google</button>
//           </div>
//         )}
//       </div>
//     );
//   }

//   export default MyAppComponent;

// import React, { useState } from 'react';
// import { useUserAuth } from '../Contexts/UserAuthContext';
// import 'react-bootstrap'
// import UserPage from '../pages/UserPage';
// import { useNavigate } from 'react-router-dom';

// function MyAppComponent() {
//   const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     logIn(email, password)
//     .catch(error => console.error(error));
//   };

//   const handleSignup = () => {
//     signUp(email, password);
//   };

//   const handleFacebookSignIn = () => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log("User signed in with Facebook:", user);
//         navigate('/'); // Redirect to home page or any desired route
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div>
//       {user ? (
//           <UserPage user={user}></UserPage>
//       ) : (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isSignUp ? (
//             <button onClick={handleSignup}>Sign Up</button>
//           ) : (
//             <button onClick={handleLogin}>Log In</button>
//           )}
//           <button onClick={googleSignIn}>Sign In with Google</button>
//           <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>
//           <p>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyAppComponent;

// import React, { useState } from 'react';
// import { useUserAuth } from '../Contexts/UserAuthContext';
// import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'; // Import necessary Firebase authentication functions
// import 'react-bootstrap';
// import UserPage from '../pages/UserPage';
// import { useNavigate } from 'react-router-dom';

// function MyAppComponent() {
//   const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [error, setError] = useState(null); // Define state for error handling
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     logIn(email, password)
//       .catch(error => setError(error.message)); // Catch and handle login errors
//   };

//   const handleSignup = () => {
//     signUp(email, password)
//       .catch(error => setError(error.message)); // Catch and handle signup errors
//   };

//   const handleFacebookSignIn = () => {
//     const auth = getAuth(); // Get authentication instance
//     const provider = new FacebookAuthProvider(); // Create Facebook authentication provider
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log("User signed in with Facebook:", user);
//         navigate('/'); // Redirect to home page or any desired route
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//     setError(null); // Reset error when toggling between sign up and login
//   };

//   return (
//     <div>
//       {user ? (
//         <UserPage user={user}></UserPage>
//       ) : (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isSignUp ? (
//             <button onClick={handleSignup}>Sign Up</button>
//           ) : (
//             <button onClick={handleLogin}>Log In</button>
//           )}
//           <button onClick={googleSignIn}>Sign In with Google</button>
//           <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>
//           {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is any */}
//           <p>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyAppComponent;

import React, { useState } from "react";
import { useUserAuth } from "../Contexts/UserAuthContext";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import UserPage from "../pages/UserPage";
import { useNavigate } from "react-router-dom";

function MyAppComponent() {
  const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    logIn(email, password).catch((error) => setError(error.message));
  };

  const handleSignup = () => {
    signUp(email, password).catch((error) => setError(error.message));
  };

  const handleFacebookSignIn = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Facebook:", user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  return (
    <div className="containerer my-2 ">
      {" "}
      {/* Use Bootstrap container class for responsiveness */}
      {user ? (
        <UserPage user={user}></UserPage>
      ) : (
        <div className=" d-flex flex-col justify-content-center  ">
          {" "}
          {/* Use Bootstrap row and justify-content-center for centering */}
          <div className="col-md-3 border my-4 shadow p-2 rounded">
            {" "}
            {/* Use Bootstrap column classes for layout */}
            <input
              type="email"
              className="form-control mb-2" // Use Bootstrap form-control class
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-2" // Use Bootstrap form-control class
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp ? (
              <button
                className="btn btn-primary btn-block mb-2"
                onClick={handleSignup}
              >
                Sign Up {/* Use Bootstrap button classes */}
              </button>
            ) : (
              <button
                className="btn btn-primary btn-block mb-2"
                onClick={handleLogin}
              >
                Log In {/* Use Bootstrap button classes */}
              </button>
            )}
            <button
              className="btn btn-danger btn-block mb-2"
              onClick={googleSignIn}
            >
              Sign In with Google
            </button>{" "}
            {/* Use Bootstrap button classes */}
            <button
              className="btn btn-primary btn-block mb-2"
              onClick={handleFacebookSignIn}
            >
              Sign In with Facebook
            </button>{" "}
            {/* Use Bootstrap button classes */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {/* <p style={{ color: 'white' }}>
  {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'} 
  <button className="btn btn-link" onClick={toggleSignUp}>
    {isSignUp ? 'Log In' : 'Sign Up'}
  </button>
</p>        */}
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <p
                  style={{
                    color: "white",
                    display: "inline-block",
                    marginRight: "10px",
                    marginBottom: "0",
                  }}
                >
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                </p>
                <button
                  className="btn btn-link"
                  style={{ display: "inline-block" }}
                  onClick={toggleSignUp}
                >
                  {isSignUp ? "Log In" : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAppComponent;

// import React, { useState } from 'react';
// import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// import { getAuth, RecaptchaVerifier, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// function MyAppComponent() {
//   const { signUp, googleSignIn } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
//   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//   const handlePhoneLogin = () => {
//     const auth = getAuth();
//     const verifier = new RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // Callback function
//       }
//     });
//     setRecaptchaVerifier(verifier);

//     initiatePhoneNumberVerification(phoneNumber, verifier)
//       .then(vid => {
//         setVerificationId(vid);
//         setIsVerifyingOTP(true);
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleVerifyOTP = () => {
//     verifyOTP(verificationId, otp)
//       .then(userCredential => console.log("Phone number authenticated successfully:", userCredential.user))
//       .catch(error => setError(error.message));
//   };

//   const handleLogin = () => {
//     // Handle email/password login
//   };

//   const handleSignup = () => {
//     signUp(email, password)
//       .then(() => {
//         setEmail('');
//         setPassword('');
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleFacebookSignIn = () => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log("User signed in with Facebook:", user);
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       {!isSignUp && (
//         <>
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button id="sign-in-button" onClick={handlePhoneLogin}>Login with Phone Number</button>
//         </>
//       )}
//       {isVerifyingOTP && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//           />
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </>
//       )}
//       {isSignUp && (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//       )}
//       <button onClick={isSignUp ? handleSignup : handleLogin}>{isSignUp ? 'Sign Up' : 'Log In'}</button>
//       <button onClick={googleSignIn}>Sign In with Google</button>
//       <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>
//       <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default MyAppComponent;

// import '/Users/kaustubhsagale/Desktop/carproject/src/styles/otp.css';
// import React, { useState } from 'react'
// import {BsFillShieldLockFill, BsTelephoneFill} from 'react-icons/bs';
// import OtpInput from 'otp-input-react';
// import {CgSpinner} from 'react-icons/cg';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'
// import { auth } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx';
// import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from 'firebase/auth';
// import { Toaster, toast } from 'react-hot-toast';
// const MyAppComponent = () => {
//   const [otp,setOtp]= useState('');
//   const [phone,setPhone]= useState('');
//   const [loading,setLoading]=useState(false);
//   const [showOTP,setShowOTP] = useState(false);
//   const [user,setUser]=useState(null);

//   function onCaptchVerify(){
//     if(!window.recaptchaVerifier)
//     {
//       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
//                 onSignup();
//         },
//         'expired-callback': () => {

//         }
//       }, auth);
//     }
//   }
//  async function onSignup(){
//     setLoading(true);
//     onCaptchVerify()
//     const appVerifier = window.recaptchaVerifier;
//     const formatNumber = '+'+phone;
//   await  signInWithPhoneNumber(auth, formatNumber, appVerifier)
//     .then((confirmationResult) => {

//       window.confirmationResult = confirmationResult;
//     setLoading(false);
//       setShowOTP(true);
//       toast.success("Otp Send Sucessfully")
//       // ...
//     }).catch((error) => {
//       console.log("🚀 ~ file: App.js:42 ~ .then ~ error:", error)
//     setLoading(false);
//     // toast.error("Error Occured")

//       // Error; SMS not sent
//       // ...
//     });
//   }

//   const signOutE=async()=>{
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       toast.success("logout Success")
//       setUser(null);

//     }).catch((error) => {
//       toast.error("Error Occroued"+error.message)
//     });
//   }

//     function onOtpVerified(){
//       setLoading(true);
//       window.confirmationResult.confirm(otp).then(async(res)=>{
//         console.log(res);
//         setUser(res.user)
//         setLoading(false);
//       }).catch((err) => {
//         console.log("🚀 ~ file: App.js:63 ~ window.confirmationResult.confirm ~ err:", err)
//         setLoading(false);
//       toast.error("Invalid OTP or expired OTP")

//       })
//     }

//   return (
//     <>
//       <section className="bg-emerald-500 flex items-center justify-center h-screen">
//         <div id="recaptcha-container"></div>
// <Toaster toastOptions={{
//   duration:4000

// }} />

//       { !user ?   <div className="">
//           <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
//             <h1 className='text-center leading-normal text-white font-medium text-3xl mb-6'>
//               welcome to <br /> Tech Krishna
//             </h1>
//          {  showOTP ?  <>

//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsFillShieldLockFill size={30} />
//                 </div>
//                 <label htmlFor="ph" className='font-bold text-2xl text-white text-center'>Enter Your Otp</label>
//                 <OtpInput value={otp} onChange={setOtp} className="opt-container" OTPLength={6} otpType="number" disabled={false}></OtpInput>

//                 <button onClick={onOtpVerified} className='bg-emerald-700 w-full flex gap-1 items-center justify-center text-white rounded py-2.5'>
//                   {
//                     loading &&
//                   <CgSpinner size={20}  className='mt-1 animate-spin'/>
//                   }
//                   <span>Verify Otp</span>
//                 </button>
//             </>

//                       :
//             <>

//             <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//               <BsTelephoneFill size={30} />
//             </div>
//             <label htmlFor="ph" className='font-bold text-2xl text-white text-center'>Verify mobile</label>
//          <PhoneInput country={'in'} value={phone} onChange={setPhone} />
//             <button onClick={onSignup} className='bg-emerald-700 w-full flex gap-1 items-center justify-center text-white rounded py-2.5'>
//               {
//                 loading &&
//               <CgSpinner size={20}  className='mt-1 animate-spin'/>
//               }
//               <span>Sent code with SMS</span>
//             </button>
//         </>}
//           </div>
//         </div>
//         :
//         <>

//         <h2 className="text-center leading-normal text-white font-medium text-2xl ">Login Success</h2>
//                 <button onClick={signOutE} className='bg-emerald-700 w-full flex gap-1 items-center justify-center text-white rounded py-2.5'>logout</button>
//         </>
// }

//       </section>
//     </>
//   )
// }

// export default MyAppComponent
// import React, { useState } from 'react';
// import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// function MyAppComponent() {
//   const { logIn, signUp, logOut, googleSignIn, initiatePhoneNumberVerification, verifyOTP } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
//   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//   const handlePhoneLogin = () => {

//     // const auth = getAuth();
//     // const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//     //   'size': 'invisible',
//     //   'callback': (response) => {
//     //     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     //     // You can now proceed with phone number sign-in.
//     //   }
//     // }, auth);

//     const auth = getAuth();
//     auth.settings.appVerificationDisabledForTesting = true;
// // Initialize RecaptchaVerifier
// const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//     'size': 'normal',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // Implement your logic here
//         const phoneNumber = "+91 3456789012"; // Example phone number
//         const appVerifier = window.recaptchaVerifier;
//         signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//             .then((confirmationResult) => {
//                 // SMS sent. Prompt user to type the code from the message, then sign the
//                 // user in with confirmationResult.confirm(code).
//                 window.confirmationResult = confirmationResult;
//             }).catch((error) => {
//                 // Error; SMS not sent
//                 console.error("Error during sign-in", error);
//             });
//     }
// }, auth);

//     const verifier = new RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // Callback function
//       }
//     });
//     setRecaptchaVerifier(verifier);

//     initiatePhoneNumberVerification(phoneNumber, verifier)
//       .then(vid => {
//         setVerificationId(vid);
//         setIsVerifyingOTP(true);
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleVerifyOTP = () => {
//     verifyOTP(verificationId, otp)
//       .then(userCredential => console.log("Phone number authenticated successfully:", userCredential.user))
//       .catch(error => setError(error.message));
//   };

//   // const handleSignup = () => {
//   //   signUp(email, password)
//   //     .then(() => {
//   //       setEmail('');
//   //       setPassword('');
//   //     })
//   //     .catch(error => setError(error.message));
//   // };

//   // const handleLogin = () => {
//   //   logIn(email, password)
//   //     .then(() => {
//   //       setEmail('');
//   //       setPassword('');
//   //     })
//   //     .catch(error => setError(error.message));
//   // };

//   const handleLogin = () => {
//           logIn(email, password);
//          };

//         const handleSignup = () => {
//           signUp(email, password);
//         };

//   const handleFacebookSignIn = () => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log("User signed in with Facebook:", user);
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div>
//       <h1></h1>
//       {!isSignUp && (
//         <>
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button id="sign-in-button" onClick={handlePhoneLogin}>Login with Phone Number</button>
//         </>
//       )}
//       {isVerifyingOTP && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//           />
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </>
//       )}
//       <div>
//          <h1>Welcome to My App</h1>
//         {user ? (
//           <div>
//             <p>Hello, {user.displayName || user.email}!</p>
//              <button onClick={logOut}>Log Out</button>
//            </div>
//          ) : (
//           <div>
//             <input
//              type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//              />
//             <input
//                type="password"
//               placeholder="Password"
//               value={password}
//             onChange={(e) => setPassword(e.target.value)}
//          />

//          {isSignUp ? (
//             <button onClick={handleSignup}>Sign Up</button>
//            ) : (
//              <button onClick={handleLogin}>Log In</button>
//            )}
//            <button onClick={googleSignIn}>Sign In with Google</button>
//            <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>

//          <p>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//        </div>
//       )}
//     </div>
//       {/* <button onClick={isSignUp ? handleSignup : handleLogin}>{isSignUp ? 'Sign Up' : 'Log In'}</button>

//       <button onClick={googleSignIn}>Sign In with Google</button>
//       <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>
//       <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//       {error && <p>{error}</p>}
//     </div> */}
//   );
// }

// export default MyAppComponent;

// import React, { useState, useEffect } from 'react';
// import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import { getAnalytics, initializeAnalytics } from "firebase/analytics";
// import { connectAuthEmulator } from "firebase/auth";

// function MyAppComponent() {
//   const { logIn, signUp, googleSignIn, initiatePhoneNumberVerification, verifyOTP } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
//   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
//   const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

//   useEffect(() => {
//     // Initialize Analytics
//     const analytics = getAnalytics();
//     initializeAnalytics(analytics).then(() => {
//       setAnalyticsInitialized(true);
//     });

//     // Connect Auth to emulator
//     const auth = getAuth();
//     if (process.env.NODE_ENV === "development") {
//       connectAuthEmulator(auth, "http://localhost:5559");
//     }
//   }, []);

//   useEffect(() => {
//     // Connect Analytics to emulator if initialized
//     if (analyticsInitialized && process.env.NODE_ENV === "development") {
//       console.log("Use analytics emulator");
//       // Call useEmulator here
//     }
//   }, [analyticsInitialized]);

// // import { getAnalytics, useEmulator } from "firebase/analytics";
// // import { useUserAuth } from '/Users/kaustubhsagale/Desktop/carproject/src/Contexts/UserAuthContext.jsx';
// // import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// // import {  initializeAnalytics } from "firebase/analytics";
// // import { useEmulator as useAnalyticsEmulator } from "firebase/analytics";
// // import { connectAuthEmulator } from "firebase/auth";

// // const analytics = getAnalytics();
// // initializeAnalytics(analytics);

// // // Connect Analytics to emulator
// // if (process.env.NODE_ENV === "development") {
// //   useAnalyticsEmulator(analytics, "http://localhost:5001", { disableAutoCollection: true });
// // }

// // // Connect Auth to emulator
// // const auth = getAuth();
// // if (process.env.NODE_ENV === "development") {
// //   connectAuthEmulator(auth, "http://localhost:9099");
// // }

// // function MyAppComponent() {
// //   const { logIn, signUp, logOut, googleSignIn, initiatePhoneNumberVerification, verifyOTP } = useUserAuth();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isSignUp, setIsSignUp] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [otp, setOTP] = useState('');
// //   const [verificationId, setVerificationId] = useState(null);
// //   const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
// //   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//   const handlePhoneLogin = () => {
//     const auth = getAuth();
//     auth.settings.appVerificationDisabledForTesting = true; // Disable app verification for testing

//     const verifier = new RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // Callback function
//       }
//     });
//     setRecaptchaVerifier(verifier);

//     initiatePhoneNumberVerification(phoneNumber, verifier)
//       .then(vid => {
//         setVerificationId(vid);
//         setIsVerifyingOTP(true);
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleVerifyOTP = () => {
//     verifyOTP(verificationId, otp)
//       .then(userCredential => console.log("Phone number authenticated successfully:", userCredential.user))
//       .catch(error => setError(error.message));
//   };

//   const handleLogin = () => {
//     logIn(email, password)
//       .then(() => {
//         setEmail('');
//         setPassword('');
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleSignup = () => {
//     signUp(email, password)
//       .then(() => {
//         setEmail('');
//         setPassword('');
//       })
//       .catch(error => setError(error.message));
//   };

//   const handleFacebookSignIn = () => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log("User signed in with Facebook:", user);
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       {!isSignUp && (
//         <>
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button id="sign-in-button" onClick={handlePhoneLogin}>Login with Phone Number</button>
//         </>
//       )}
//       {isVerifyingOTP && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//           />
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </>
//       )}
//       {!isSignUp && (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//       )}
//       <button onClick={isSignUp ? handleSignup : handleLogin}>{isSignUp ? 'Sign Up' : 'Log In'}</button>
//       <button onClick={googleSignIn}>Sign In with Google</button>
//       <button onClick={handleFacebookSignIn}>Sign In with Facebook</button>
//       <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default MyAppComponent;

// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { UserAuthContextProvider } from '../Contexts/UserAuthContext';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { auth } from '../firebase';

// function MyAppComponent() {
//   const { logIn, googleSignIn, facebookSignIn, phoneSignIn, verifyOTP } = useContext(UserAuthContextProvider);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
//   const [error, setError] = useState(null);

//   const handlePhoneLogin = () => {
//     const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // You can now proceed with phone number sign-in.
//       }
//     }, auth);

//     signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         setVerificationId(confirmationResult.verificationId);
//         setIsVerifyingOTP(true);
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const handleVerifyOTP = () => {
//     window.confirmationResult.confirm(otp)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         // ...
//       })
//       .catch((error) => {
//         // Handle errors here
//         setError(error.message);
//       });
//   };

//   const handleLogin = () => {
//     logIn(email, password);
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn();
//   };

//   const handleFacebookSignIn = () => {
//     facebookSignIn();
//   };

//   const handlePhoneSignIn = () => {
//     phoneSignIn(phoneNumber);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Log In</button>
//       <button onClick={handleGoogleSignIn}>Log In with Google</button>
//       <button onClick={handleFacebookSignIn}>Log In with Facebook</button>
//       <div id="recaptcha-container"></div>
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button onClick={handlePhoneSignIn}>Log In with Phone Number</button>
//       {isVerifyingOTP && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//           />
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyAppComponent;
