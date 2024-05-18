import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useState, useEffect } from 'react';

import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Headerr from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/Headerr.jsx";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
// import Bar from "../scenes/bar";
// import Pie from '../scenes/pie';
// import Line from '../scenes/line';
import StatBox from '/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/StatBox.jsx';
// import GeographyChart from '/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/GeographyChart.jsx';
import BarChart from '/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/BarCharts.jsx';
import ProgressCircle from '/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/ProgressCircle.jsx';
// import Sidebar from "../global/Sidebar";
// import Topbar from "../global/Topbar";
import LineC from "../../MyComponents/LineC";
import LineChart from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/LineChart.jsx";
import getContact from "../../MyComponents/getcontact";
import axios from "axios";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [contactsData, setContactsData] = useState([]);


//   function fetchinfo() {
//     fetch('http://localhost:5001/getContact')
//   .then(response => {
//     console.log(response)
//     // Check if the response is successful (status 200-299)
//   //   if (!response.ok) {
//   //     throw new Error('Network response was not ok');
//   //   }
//   //   // Parse the JSON response
//   //   return response.json();
//   // })
//   // .then(data => {
//   //   // Handle the JSON data
//   //   console.log(data);
//   })
//   .then(data => {
//     setContactsData(data);
// })
//   .catch(error => {
//     // Handle errors
//     console.error('There was a problem with the fetch operation:', error);
//   });
// }
// useEffect(()=> {
//   fetchinfo()
// },[fetchinfo])


//   function DataComponent() {
//     const [data, setData] = useState([]);
  
//     // useEffect(() => {
//     //   fetchData();
//     // }, []);
//     useEffect(()=> {
//       fetchinfo()
//     },[fetchinfo])
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5001/getContact');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     return (
//       <div>
//         {data.map(item => (
//           <getContact key={item.id} data={item} />
//         ))}
//       </div>
//     );
//   }
      
// function DataComponent() {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);
//   useEffect(()=> {
//     fetchinfo()
//   },[fetchinfo])
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5001/getContact');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       {data.map(item => (
//         <getContact key={item.id} data={item} />
//       ))}
//     </div>
//   );
// }

useEffect(() => {
  fetchContacts();
}, []);

// function fetchinfo() {
//   fetch('http://localhost:5001/getContact')
//     .then(response => response.json())
//     .then(data => {
//       setContactsData(data);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
// }
function fetchinfo() {
  fetch('http://localhost:5001/getContact')
.then(response => {
  console.log(response)
  
})
.catch(error => {
  // Handle errors
  console.error('There was a problem with the fetch operation:', error);
});
}
const fetchContacts=async()=>{
  try {
    const res = await axios.get("http://localhost:5001/getContact");
    const responseData = await res.json; 

    console.log(responseData)
    //const data = await res.json();
    setContactsData(res.data.contact)
  } catch (error) {
    // Error occurred during fetch
    console.error("Error:", error.message);
  }
}
  return (
    
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headerr title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,000rs"
            subtitle="Current Balance"
            progress="0.75"
            increase="+14%"
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="430,000"
            subtitle="Total Earnings"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2,00"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,22"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                rs{transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Yearly Earning
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                15,00,000rs
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              58,352rs revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 30px 30px" }}
          >
           Monthly Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
      paddingRight="220px"
         
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "1px" }}
          >
           Monthly Summary of Earning
          </Typography>
          <Box height="250px" >
            {/* <GeographyChart isDashboard={true} /> */}
      <LineC/>
          </Box>
        </Box>
        
      </Box>
      
      <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} paddingRight="220px">
  <Typography variant="h2" fontWeight="600" sx={{ marginBottom: "1px" }}>
    Monthly Summary of Earning
  </Typography>
  <Box height="250px">

  {contactsData.map(contact => (
  <div key={contact._id}>
    <p>Name: {contact.name}</p>
    <p>Email: {contact.email}</p>
    <p>Message: {contact.message}</p>
  </div>
))}
    {/* <GeographyChart isDashboard={true} /> */}
    {contactsData && contactsData.length > 0 && (
      <StatBox title="Total Contacts" value={contactsData.length} />
    )}
  </Box>
</Box>

    </Box>



  );
};

export default Dashboard;