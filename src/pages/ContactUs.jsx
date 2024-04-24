// import React from 'react'
// // import BarCharts from '../MyComponents/BarCharts';
// import Bar from "../scenes/bar";
// import Pie from '../scenes/pie';
// import Line from '../scenes/line';
// import Dashboard from '../scenes/dashboard';




// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactUs = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
        
//         await axios.post('http://localhost:5001/contact', { name, email, message });
//         alert('Message sent successfully!');
//         setName('');
//         setEmail('');
//         setMessage('');
//       } catch (error) {
//         console.error('Error sending message:', error.message);
//       }
//     };
  
//     return (
//       <>
//     <section className='section'>
     
//     <div className="contact-us">
//     <main className='k'>
//              <div className='pp'>      <div > <img  src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg" alt="Logo 1" className="logo" />
//              </div>    <div> <img src="https://w7.pngwing.com/pngs/811/53/png-transparent-phone-contact-icon-logo-iphone-computer-icons-telephone-call-phone-icon-electronics-text-grass-thumbnail.png" alt="Logo 1" className="logo"/>
//              </div> <img src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon.png" alt="Logo 1" className="logo"/>
//   </div>
//   <div>
//               <p className='w'> <strong><h3>Address:</h3></strong> <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
//               </p> 
             
//          <p className='p'>
//                 <strong><h3 >Phone:</h3></strong> <h4 className='m'>000-000-0000</h4>
//                 </p>
//               <p className='e'>
//                 <strong><h3 >Email:</h3></strong> <h4 className='m'>wrub7d78i0e@temporary-mail</h4>
//                 </p> </div></main>
//               </div>
//       <div className='f'>
//       <form onSubmit={handleSubmit}>
     
//         <label>
//           Name:
//           <input
//             type="text"
          
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your Full Name"
//           />
//         </label>
//         <label>
//           Email:
//           <input 
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your Email"
//           />
//         </label>
//         <label>
//           Message:
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type your Message"
//           />
//         </label>
//         <button type="submit">Submit</button>
    
//       </form>
//       </div>
     
//                </section>
//                <p>
              
//                 <strong><h2>Connect with us:</h2></strong> 
//                </p>
//                <div class="social-icons">
//           <a href="https://www.facebook.com/your-facebook-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png" alt="Facebook"/></a>
//           <a href="https://www.instagram.com/your-instagram-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png" alt="Instagram"/></a>
//           <a href="https://www.twitter.com/your-twitter-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo-thumbnail.png" alt="Twitter"/></a>
//           <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/511/605/png-transparent-in-logo-linkedin-diduco-ab-icon-linkedin-blue-angle-text-thumbnail.png" alt="Linkedin"/></a>
    
//             </div>
//             </>
      
//     );
//   };

  
//   export default ContactUs

import Carousel from '../MyComponents/Carousel';
import React, { useState } from 'react';
import axios from 'axios';
const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('http://localhost:5001/contact', { name, email, message });
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    };
  
    return (
      <>
      <h2 className='my-element' style={{ color: 'White' }}>ContactUs</h2>
      <section className='section'>
  <div className="container" id='e'>
    <div className="row">
      <div className="col-md-6">
      <div className="contact-info" >
  <div className="info-item">
    <img src="data:image/png;base64,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" alt="Phone" style={{ width: "80px", height: "auto" }} />
    <h3>Address:</h3>
    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
  </div>
  <div className="info-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqIU43tJGMAY7wm_igrq_d3tcPDHHl2o9Qw&s" alt="Phone" style={{ width: "80px", height: "auto" }} />
    <h3>Phone:</h3>
    <small>000-000-0000</small>
  </div>
  <div className="info-item">
    <img src="data:image/jpeg;base64,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" alt="Email" style={{ width: "80px", height: "auto" }} />
    <h3>Email:</h3>
    <small>wrub7d78i0e@temporary-mail</small>
  </div>
</div>

      </div>
        {/* <section className='section'>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info">
                  <h3>Address:</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <h3>Phone:</h3>
                  <p>000-000-0000</p>
                  <h3>Email:</h3>
                  <p>wrub7d78i0e@temporary-mail</p>
                </div>
              </div> */}
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="Enter your Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      placeholder="Type your Message"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Carousel/>
        <div className="social-icons">
          {/* <a href="https://www.facebook.com/your-facebook-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png" alt="Facebook"/></a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png" alt="Instagram"/></a>
          <a href="https://www.twitter.com/your-twitter-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo-thumbnail.png" alt="Twitter"/></a>
          <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/511/605/png-transparent-in-logo-linkedin-diduco-ab-icon-linkedin-blue-angle-text-thumbnail.png" alt="Linkedin"/></a> */}
                  <h3 style={{ color: 'white',textAlign: "center", marginTop:"2%" }}>ConnectWithUs:</h3>

         <div className="contact-info" style={{ height: "300px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",gap:"5%",marginTop:"-80px",}}>

  <div>
  <a href="https://www.facebook.com/your-facebook-profile" target="_blank"> <img src="https://static.vecteezy.com/system/resources/thumbnails/018/910/719/small/facebook-logo-facebook-icon-free-free-vector.jpg" alt="Facebook"  style={{ width: "70px", height: "auto" }} /></a>
  </div>
  <div>
  <a href="https://www.instagram.com/your-instagram-profile" target="_blank"> <img src="https://img.freepik.com/premium-vector/gradient-social-media-logo_197792-2599.jpg" alt="Instagram" style={{ width: "70px", height: "auto" }} /></a> 
  </div>
  <div>
  <a href="https://www.twitter.com/your-twitter-profile" target="_blank"> <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1712016000&semt=ais" alt="Twitter" style={{ width: "70px", height: "auto" }} /></a> 
  </div>
  <div>
  <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" style={{ width: "70px", height: "auto" }} /></a> 
  </div>
</div>

         
          
        </div>
      </>
    );
};

export default ContactUs;

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Topbar.jsx";
// import Sidebar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Sidebar.jsx";
// import dashboard from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/dashboard/index.jsx";
// import Team from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/team/index.jsx";
// import Invoices from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/invoices/index.jsx";
// import Contacts from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/contacts/index.jsx";
// import bar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/bar/index.jsx";
// import Form from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/form/index.jsx";
// import line from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/line/index.jsx";
// import pie from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/pie/index.jsx";
// import FAQ from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/faq/index.jsx";
// import Geography from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/geography/index.jsx";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "/Users/kaustubhsagale/Desktop/carproject/src/theme.jsx";
// import Calendar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/calendar/calendar.jsx";

// const ContactUs = () => {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <div>
      
//       {/* <Route path="./bar" element={<Bar />} /> */}
// {/* <Bar/>
// <Pie/>
// <Line/> */}
// {/* <Dashboard/> */}

// <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />

//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//     </div>
//   )
// }

// export default ContactUs







//   //   const [name, setName] = useState('');
//   //   const [email, setEmail] = useState('');
//   //   const [message, setMessage] = useState('');
  
//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
  
//   //     try {
        
//   //       await axios.post('http://localhost:5001/contact', { name, email, message });
//   //       alert('Message sent successfully!');
//   //       setName('');
//   //       setEmail('');
//   //       setMessage('');
//   //     } catch (error) {
//   //       console.error('Error sending message:', error.message);
//   //     }
//   //   };
  
//   //   return (
//   //     <><div>  
//   //     </div>
//   //     <div className='nm'>
//   // <h1 className='h1'> Contact Us </h1> 
//   // <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt laudantium enim possimus repellat debitis et quis!</h4></div>
//   // <div>
//   // </div> <div className='pv'>
//   //   <section className='sectionn'>
     
//   //   <div className="contact-us">
//   //   <main className='nk'>
//   //            <div className='npp'>      <div  className='nb'> <img  src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg" alt="Logo 1" className="llogo" />
//   //            </div>    <div> <img src="https://w7.pngwing.com/pngs/811/53/png-transparent-phone-contact-icon-logo-iphone-computer-icons-telephone-call-phone-icon-electronics-text-grass-thumbnail.png" alt="Logo 1" className="llogo"/>
//   //            </div> <img src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon.png" alt="Logo 1" className="llogo"/>
//   // </div>
//   // <div>
//   //             <p className='nw'> <strong><h3 className='h3'>Address:</h3></strong> <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
//   //             </p> 
             
//   //        <p className='nnp'>
//   //               <strong><h3 className='h3' >Phone:</h3></strong> <h4 className='nm'>000-000-0000</h4>
//   //               </p>
//   //             <p className='ne'>
//   //               <strong><h3 className='h3'>Email:</h3></strong> <h4 className='nm'>wrub7d78i0e@temporary-mail</h4>
//   //               </p> </div></main>
//   //             </div>
//   //     <div className='nf'>
//   //     <form onSubmit={handleSubmit}>
     
//   //       <label>
//   //         Name:
//   //         <input
//   //           type="text"
          
//   //           value={name}
//   //           onChange={(e) => setName(e.target.value)}
//   //           placeholder="Enter your Full Name"
//   //         />
//   //       </label>
//   //       <label>
//   //         Email:
//   //         <input 
//   //           type="email"
//   //           value={email}
//   //           onChange={(e) => setEmail(e.target.value)}
//   //           placeholder="Enter your Email"
//   //         />
//   //       </label>
//   //       <label>
//   //         Message:
//   //         <textarea
//   //           value={message}
//   //           onChange={(e) => setMessage(e.target.value)}
//   //           placeholder="Type your Message"
//   //         />
//   //       </label>
//   //       <button type="submit">Submit</button>
    
//   //     </form>
//   //     </div>
     
//   //              </section>
//   //              <p>
              
//   //               <strong><h2 className='h2'> Connect with us: </h2></strong> 
//   //              </p>
//   //              <div class="social-icons">
//   //         <a href="https://www.facebook.com/your-facebook-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png" alt="Facebook"/></a>
//   //         <a href="https://www.instagram.com/your-instagram-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png" alt="Instagram"/></a>
//   //         <a href="https://www.twitter.com/your-twitter-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo-thumbnail.png" alt="Twitter"/></a>
//   //         <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank"><img src="https://w7.pngwing.com/pngs/511/605/png-transparent-in-logo-linkedin-diduco-ab-icon-linkedin-blue-angle-text-thumbnail.png" alt="Linkedin"/></a>
    
//   //           </div>
//   //           </div>
//   //           </>
      
//   //   );
  