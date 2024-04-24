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






import React, { useState } from 'react';
import { useUserAuth } from '../Contexts/UserAuthContext';
import 'react-bootstrap'
import UserPage from '../pages/UserPage';
import { useNavigate } from 'react-router-dom';

function MyAppComponent() {
  const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    logIn(email, password)
    .catch(error => console.error(error));
  };

  const handleSignup = () => {
    signUp(email, password);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {user ? (
          <UserPage user={user}></UserPage>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp ? (
            <button onClick={handleSignup}>Sign Up</button>
          ) : (
            <button onClick={handleLogin}>Log In</button>
          )}
          <button onClick={googleSignIn}>Sign In with Google</button>
          <p>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'} <button onClick={toggleSignUp}>{isSignUp ? 'Log In' : 'Sign Up'}</button></p>
        </div>
      )}
    </div>
  );
}

export default MyAppComponent;


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
