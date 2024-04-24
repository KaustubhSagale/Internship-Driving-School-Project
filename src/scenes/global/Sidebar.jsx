// import { useState } from "react";
// import 'react-pro-sidebar/dist/css/styles.min.css';// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// // import { ProSidebar } from 'react-pro-sidebar';

// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';





// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// // import "react-pro-sidebar/dist/css/styles.min.css";
// import 'react-pro-sidebar/dist/css/styles.css';
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// // import 'react-pro-sidebar/dist/css/styles.min.css';
// // const Item = ({ title, to, icon, selected, setSelected }) => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   return (
// //     <MenuItem
// //       active={selected === title}
// //       style={{
// //         color: colors.grey[100],
// //       }}
// //       onClick={() => setSelected(title)}
// //       icon={icon}
// //     >
// //       <Typography>{title}</Typography>
// //       <Link to={to} />
// //     </MenuItem>
// //   );
// // };

// //import sidebar css from react-pro-sidebar module and our custom css 
// // import "react-pro-sidebar/dist/css/styles.css";



// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon} // Pass the icon directly to the MenuItem component
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{"& .custom-sidebar": {
//         height: "500vh", // Set the height of the sidebar
//       },
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3" color={colors.grey[100]}>
//                   ADMINIS
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <img
//                   alt="profile-user"
//                   width="100px"
//                   height="100px"
//                   src={`../../assets/user.png`}
//                   style={{ cursor: "pointer", borderRadius: "50%" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography
//                   variant="h2"
//                   color={colors.grey[100]}
//                   fontWeight="bold"
//                   sx={{ m: "10px 0 0 0" }}
//                 >
//                   Ed Roh
//                 </Typography>
//                 <Typography variant="h5" color={colors.greenAccent[500]}>
//                   VP Fancy Admin
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Data
//             </Typography>
//             <Item
//               title="Manage Team"
//               to="/team"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Contacts Information"
//               to="/contacts"
//               icon={<ContactsOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Invoices Balances"
//               to="/invoices"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Pages
//             </Typography>
//             <Item
//               title="Profile Form"
//               to="/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Calendar"
//               to="/calendar"
//               icon={<CalendarTodayOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="FAQ Page"
//               to="/faq"
//               icon={<HelpOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Charts
//             </Typography>
//             <Item
//               title="Bar Chart"
//               to="/bar"
//               icon={<BarChartOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Pie Chart"
//               to="/pie"
//               icon={<PieChartOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Line Chart"
//               to="/line"
//               icon={<TimelineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Geography Chart"
//               to="/geography"
//               icon={<MapOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className={`w3-sidebar w3-bar-block w3-border-right ${isOpen ? 'w3-show' : ''}`} id="mySidebar">
//         <button onClick={toggleSidebar} className="w3-bar-item w3-large">Close &times;</button>
//         <a href="#" className="w3-bar-item w3-button">Link 1</a>
//         <a href="#" className="w3-bar-item w3-button">Link 2</a>
//         <a href="#" className="w3-bar-item w3-button">Link 3</a>
//       </div>

//       <div className="w3-teal">
//         <button className="w3-button w3-teal w3-xlarge" onClick={toggleSidebar}>☰</button>
//         <div className="w3-container">
//           <h1>My Page</h1>
//         </div>
//       </div>

//       <img src="img_car.jpg" alt="Car" style={{ width: '100%' }} />

//       <div className="w3-container">
//         <p>This sidebar is hidden by default</p>
//         <p>You must click on the "hamburger" icon (top left) to open it.</p>
//         <p>The sidebar will hide a part of the page content.</p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const Sidebar = () => {
//   return (
//     <div>
//       {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
//   Link with href
// </a>
// <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//   Button with data-bs-target
// </button> */}

// <div style={{ marginTop: '35px' }} class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//   <div class="offcanvas-header">
//     {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
//     {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
//   </div>
//   <div class="offcanvas-body">
//     {/* <div>
//       Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
//     </div> */}
//     <div class="dropdown mt-3">
//       <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
//         Dropdown button
//       </button>
//       <ul class="dropdown-menu">
//         <li><a class="dropdown-item" href="#">Action</a></li>
//         <li><a class="dropdown-item" href="#">Another action</a></li>
//         <li><a class="dropdown-item" href="#">Something else here</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Sidebar
// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar" style={{ marginTop: '50px' }}>
//       <button className="btn btn-primary d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//         Toggle Sidebar
//       </button>

//       <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sidebar</h5>
//           <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div>
//             {/* Sidebar content goes here */}
//             <ul className="list-group">
//               <li className="list-group-item">Item 1</li>
//               <li className="list-group-item">Item 2</li>
//               <li className="list-group-item">Item 3</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Getting Started',
        icon: <i className='bx bx-star'></i>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'></i>,
        to: '/order',
        section: 'order'
    },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className={`sidebar ${isOpen ? '' : 'closed'}`} > {/* Apply 'closed' class when sidebar is closed */}
            <button className="sidebar__toggle" onClick={toggleSidebar} style={{marginLeft:'0px'}}>
                {isOpen ? '❌' : '☰ Open'}
            </button>
            
            <div className="sidebar__logo" style={{marginTop:'-57px',paddingTop: '20px'} }>
            Dashboard
            </div>
            
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">{item.icon}</div>
                            <div className="sidebar__menu__item__text">{item.display}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="open-sidebar" onClick={toggleSidebar} style={{margin: '20px'}}>
                {isOpen ? 'Close Sidebar' : '☰ '}
            </button>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default App;
