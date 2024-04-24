// firebase.jsx

// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithPhoneNumber,
//     RecaptchaVerifier } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyDhhY_OqtARuAR8K3T1084jxkMExxxUoAU",
//     authDomain: "nice-road-415710.firebaseapp.com",
//     projectId: "nice-road-415710",
//     storageBucket: "nice-road-415710.appspot.com",
//     messagingSenderId: "945699632607",
//     appId: "1:945699632607:web:b06bb37c08199d3f5e806a",
//     measurementId: "G-SZZE0182SD" // This line is optional
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithPhoneNumber,
//     RecaptchaVerifier, };



// import { initializeApp } from 'firebase/app';
// import { 
//   getAuth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   FacebookAuthProvider, // Add this line for Facebook authentication
//   onAuthStateChanged, 
//   signInWithPhoneNumber,
//   RecaptchaVerifier 
// } from 'firebase/auth'; // Changed import to use 'auth' namespace
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID" // This line is optional
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);

// export { 
//   auth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   FacebookAuthProvider, // Export FacebookAuthProvider
//   onAuthStateChanged, 
//   signInWithPhoneNumber,
//   RecaptchaVerifier 
// };


// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import other Firebase modules as needed

// import { 
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   onAuthStateChanged,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
//   signInWithCredential,
//   RecaptchaVerifier
// } from 'firebase/auth'; // Import from 'firebase/auth' module
// import { initializeApp } from 'firebase/app'; // Import initializeApp from the 'firebase/app' module

// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDhhY_OqtARuAR8K3T1084jxkMExxxUoAU",
//   authDomain: "nice-road-415710.firebaseapp.com",
//   projectId: "nice-road-415710",
//   storageBucket: "nice-road-415710.appspot.com",
//   messagingSenderId: "945699632607",
//   appId: "1:945699632607:web:b06bb37c08199d3f5e806a",
//   measurementId: "G-SZZE0182SD"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);

// const createUserWithPhoneAndOTP = (phoneNumber, otp, verificationId) => { // Add verificationId as a parameter
//   const credential = PhoneAuthProvider.credential(verificationId, otp);
//   return signInWithCredential(auth, credential);
// };

// export { 
//   auth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   FacebookAuthProvider,
//   onAuthStateChanged, 
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
//   signInWithCredential,
//   createUserWithPhoneAndOTP // Include the createUserWithPhoneAndOTP function in the export
// };
// export default firebase;






// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth'; // Import other Firebase modules as needed
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDhhY_OqtARuAR8K3T1084jxkMExxxUoAU",
//   authDomain: "nice-road-415710.firebaseapp.com",
//   projectId: "nice-road-415710",
//   storageBucket: "nice-road-415710.appspot.com",
//   messagingSenderId: "945699632607",
//   appId: "1:945699632607:web:b06bb37c08199d3f5e806a",
//   measurementId: "G-SZZE0182SD"
//   // Your Firebase config
// };

// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const analytics = getAnalytics(app);

// const createUserWithPhoneAndOTP = (phoneNumber, otp, verificationId) => { // Add verificationId as a parameter
//   const credential = PhoneAuthProvider.credential(verificationId, otp);
//   return signInWithCredential(auth, credential);
// };
// // ... Rest of your code

// export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential, createUserWithPhoneAndOTP };
// export { auth as firebaseAuthObj };
// export default firebase; // Export firebase as the default export

// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import other Firebase modules as needed

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   onAuthStateChanged,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
//   signInWithCredential
// } from 'firebase/auth'; // Import from 'firebase/auth' module

// import { initializeApp } from 'firebase/app'; // Import initializeApp from the 'firebase/app' module

// const firebaseConfig = {
//   apiKey: "AIzaSyDhhY_OqtARuAR8K3T1084jxkMExxxUoAU",
//   authDomain: "nice-road-415710.firebaseapp.com",
//   projectId: "nice-road-415710",
//   storageBucket: "nice-road-415710.appspot.com",
//   messagingSenderId: "945699632607",
//   appId: "1:945699632607:web:b06bb37c08199d3f5e806a",
//   measurementId: "G-SZZE0182SD"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Export Firebase authentication functions
// export {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   onAuthStateChanged,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
//   signInWithCredential
// };

// // export default firebase; // Export firebase as the default export
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/auth';
// import firebase from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth'; // Import specific authentication functionalities from 'firebase/auth'

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhhY_OqtARuAR8K3T1084jxkMExxxUoAU",
//   authDomain: "nice-road-415710.firebaseapp.com",
//   projectId: "nice-road-415710",
//   storageBucket: "nice-road-415710.appspot.com",
//   messagingSenderId: "945699632607",
//   appId: "1:945699632607:web:b06bb37c08199d3f5e806a",
//   measurementId: "G-SZZE0182SD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   onAuthStateChanged,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
//   signInWithCredential
// };
// export default firebase;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnmRGicNb3auQ3fINWjh1Iod_UKe-y6rw",
  authDomain: "ahen-bdff6.firebaseapp.com",
  projectId: "ahen-bdff6",
  storageBucket: "ahen-bdff6.appspot.com",
  messagingSenderId: "306406805467",
  appId: "1:306406805467:web:f5330cbdddfb3c8f3121fe",
  measurementId: "G-41DVPKYG2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); // Get authentication instance from initialized app
auth.settings.appVerificationDisabledForTesting = true;
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential
};

export default app; // Export the initialized app as the default export
