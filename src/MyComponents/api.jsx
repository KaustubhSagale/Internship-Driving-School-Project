// import React, { useEffect, useState } from 'react';

// const EarningsList = () => {
//   const [customersEarnings, setCustomersEarnings] = useState([]);

//   useEffect(() => {
//     const fetchEarnings = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/earnings');
//         const data = await response.json();
//         setCustomersEarnings(data);
//       } catch (error) {
//         console.error('Error fetching ', error);
//       }
//     };
  
//     fetchEarnings();
//   }, []);

//   return (
//     <div className="row mt-4">
//       <div className="col-md-12">
//         <h3 className="mb-4">Earnings List of Customers</h3>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Customer</th>
//               <th>Earnings</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customersEarnings.map((customer) => (
//               <tr key={customer.id}>
//                 <td>{customer.name}</td>
//                 <td>{customer.earnings}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EarningsList;

// api.js

// Simulated function to fetch earnings data from an API
export async function getEarnings() {
  // Simulated delay to mimic API response time
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulated earnings data
  const current = 1000;
  const previous = 800;
  const next = 1200;

  return { current, previous, next };
}

export default getEarnings;
