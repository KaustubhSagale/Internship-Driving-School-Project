import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasicBars from './MyComponents/LineChart';
// import { LineChart } from '@mui/x-charts';
import Location from './pages/Location';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, theme } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>
    <App />
   
  </React.StrictMode>

  

    </>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Navigation from './MyComponents/Header'; // Assuming your header is in Navigation
// import reportWebVitals from './reportWebVitals';
// import { ChakraProvider, theme } from '@chakra-ui/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <Navigation />
//       <App />
      
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
