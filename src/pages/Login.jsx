// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/welcome');
// const LoginPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Get the history object from useHistory

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'password') {
//       setIsLoggedIn(true);
//       navigate.push('/welcome'); // Redirect to the /welcome route
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleLoginSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '/Users/kaustubhsagale/Desktop/carproject/src/styles/LoginPage.css'; // Import the CSS file
// const LoginPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Get the navigate function from useNavigate

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'password') {
//       setIsLoggedIn(true);
//       navigate('/welcome'); // Use navigate function to navigate to the '/welcome' route
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard Login </h1>
//       <form onSubmit={handleLoginSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      navigate('/welcome'); // Use navigate function to navigate to the '/welcome' route
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2 className='dash'>Dashboard Login</h2>
      <form className="form" onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook from react-router-dom

// const LoginPage = () => {
//   // State to track login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // State to track username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // Get the history object from useHistory
//   const history = useHistory();

//   // Function to handle login submission
//   const handleLoginSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     // Validate username and password (You can replace this with your own logic)
//     if (username === 'admin' && password === 'password') {
//       setIsLoggedIn(true);
//       // Redirect to dashboard upon successful login
//       history.push('/dashboard');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleLoginSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
