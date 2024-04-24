// const userAuthContext = createContext();

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }
// export function UserAuthContextProvider({ children }) {
//     const [user, setUser] = useState({});
  
  
//     return (
//       <userAuthContext.Provider
//         value={{ user, logIn, signUp, logOut, googleSignIn }}
//       >
//         {children}
//       </userAuthContext.Provider>
//     );
//   }
// import { createContext, useContext, useState } from "react";
// import { auth } from "./firebase";

// const userAuthContext = createContext();

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }

// export function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   return (
//     <userAuthContext.Provider
//       value={{ user, logIn, signUp, logOut, googleSignIn }}
//     >
//       {children}
//     </userAuthContext.Provider>
//   );
// }
// UserAuthContext.js
// UserAuthContext.jsx




// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx'; // Import Firebase functions

// const UserAuthContext = createContext();
// function UserAuthContextProvider({ children }) {
//   // Other code...

//   function facebookSignIn() {
//     const facebookAuthProvider = new FacebookAuthProvider();
//     return signInWithPopup(auth, facebookAuthProvider);
//   }

// export function useUserAuth() {
//   return useContext(UserAuthContext);
// }

// function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   return (
//     <UserAuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn, facebookSignIn }}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// // Export named exports
// export { UserAuthContextProvider };
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { 
//   auth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   FacebookAuthProvider, 
//   onAuthStateChanged,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
//   PhoneAuthProvider,
//   signInWithCredential
// } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx'; // Use relative or module path

// const UserAuthContext = createContext();

// export function useUserAuth() {
//   return useContext(UserAuthContext);
// }

// function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});
//   const [verificationId, setVerificationId] = useState(null);
//   const [verificationError, setVerificationError] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   function facebookSignIn() {
//     const facebookAuthProvider = new FacebookAuthProvider();
//     return signInWithPopup(auth, facebookAuthProvider);
//   }

//   // Function to initiate phone number authentication
//   function initiatePhoneNumberVerification(phoneNumber) {
//     const phoneAuthProvider = new PhoneAuthProvider(auth);
//     const recaptchaVerifier = new RecaptchaVerifier('', {
//       size: 'invisible', // Adjust reCAPTCHA settings here
//     });
//     return phoneAuthProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier)
//       .then((verificationId) => {
//         setVerificationId(verificationId);
//         setVerificationError(null);
//         return verificationId;
//       })
//       .catch((error) => {
//         setVerificationError(error.message);
//         console.error("Error sending verification code:", error);
//         throw error;
//       });
//   }

//   // Function to verify the OTP entered by the user
//   function verifyOTP(otp) {
//     const credential = PhoneAuthProvider.credential(verificationId, otp);
//     return signInWithCredential(auth, credential);
//   }

//   return (
//     <UserAuthContext.Provider
//       value={{ 
//         user, 
//         logIn, 
//         signUp, 
//         logOut, 
//         googleSignIn, 
//         facebookSignIn,
//         initiatePhoneNumberVerification,
//         verifyOTP,
//         verificationError,
//       }}
//     >
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// // Export named exports
// export { UserAuthContextProvider };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx'; // Import Firebase functions

// const UserAuthContext = createContext();

// function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   function facebookSignIn() {
//     const facebookAuthProvider = new FacebookAuthProvider();
//     return signInWithPopup(auth, facebookAuthProvider);
//   }

//   return (
//     <UserAuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn, facebookSignIn }}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(UserAuthContext);
// }

// export { UserAuthContextProvider };
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider, signInWithPhoneNumber } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx'; // Import Firebase functions
// import { RecaptchaVerifier } from 'firebase/auth';
// import firebase from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx';
// const UserAuthContext = createContext();

// function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});
//   const [verificationId, setVerificationId] = useState(null);
//   const [verificationError, setVerificationError] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   function facebookSignIn() {
//     const facebookAuthProvider = new FacebookAuthProvider();
//     return signInWithPopup(auth, facebookAuthProvider);
//   }

//   function initiatePhoneNumberVerification(phoneNumber) {
//     // Implement your logic to initiate phone number verification here
//     // For example:
//     const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
//     return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
//       .then((verificationId) => {
//         setVerificationId(verificationId);
//         setVerificationError(null);
//         return verificationId;
//       })
//       .catch((error) => {
//         setVerificationError(error.message);
//         console.error("Error sending verification code:", error);
//         throw error;
//       });
//   }

//   return (
//     <UserAuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn, facebookSignIn, initiatePhoneNumberVerification }}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(UserAuthContext);
// }

// export { UserAuthContextProvider };




import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider, signInWithPhoneNumber } from '/Users/kaustubhsagale/Desktop/carproject/src/firebase.jsx'; // Import Firebase functions
const UserAuthContext = createContext();

function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [verificationId, setVerificationId] = useState(null);
  const [verificationError, setVerificationError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }

  function initiatePhoneNumberVerification(phoneNumber) {
    // Implement your logic to initiate phone number verification here
    // For example:
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((verificationId) => {
        setVerificationId(verificationId);
        setVerificationError(null);
        return verificationId;
      })
      .catch((error) => {
        setVerificationError(error.message);
        console.error("Error sending verification code:", error);
        throw error;
      });
  }

  return (
    <UserAuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn, facebookSignIn, initiatePhoneNumberVerification }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export { UserAuthContextProvider };
/*import React, { createContext,useRef, useState } from 'react';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
} from 'firebase/auth';
import { auth } from '../firebase';


export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const facebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const phoneSignIn = async (phoneNumber) => {
    const provider = new PhoneAuthProvider(auth);
    try {
      const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'visible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // You can now proceed with phone number sign-in.
        }
      }, auth);

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      setIsVerifyingOTP(true);
    } catch (error) {
      setError(error.message);
    }
    
  };

  const verifyOTP = async (otp) => {
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    try {
      const result = await signInWithCredential(auth, credential);
      setUser(result.user);
      setIsVerifyingOTP(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <UserAuthContextProvider
      value={{
        user,
        error,
        googleSignIn,
        facebookSignIn,
        phoneSignIn,
        verifyOTP,
        isVerifyingOTP,
        setUser,
        setError,
        setVerificationId,
        setIsVerifyingOTP,
        handleLogin,
        handleSignUp,
      }}
    >
      {children}
    </UserAuthContextProvider>
  );
};
*/