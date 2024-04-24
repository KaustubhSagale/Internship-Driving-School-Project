// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// function MyLocation() {
//   const [position, setPosition] = useState({ latitude: null, longitude: null });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         function (position) {
//           setPosition({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//           setLoading(false);
//         },
//         function (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not available in your browser.");
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>My Current Location</h2>
//       {loading && <p>Loading...</p>}
//       {!loading && error && <p>{error}</p>}
//       {!loading && !error && position.latitude && position.longitude && (
//         <div>
//           <p>
//             Latitude: {position.latitude}, Longitude: {position.longitude}
//           </p>
//           <LoadScript
//             googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
//           >
//             <GoogleMap
//               mapContainerStyle={containerStyle}
//               center={{ lat: position.latitude, lng: position.longitude }}
//               zoom={12}
//             >
//               <Marker position={{ lat: position.latitude, lng: position.longitude }} />
//             </GoogleMap>
//           </LoadScript>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyLocation;
/* eslint no-restricted-globals: ["error", "location"] */
import React from 'react';
/* eslint-disable no-restricted-globals */

import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// in the LocationItem component
<li>
<Link to={`/locations/${(location.name ?? '').toLowerCase().replace(' ', '-')}`}>    <h2>{location.name}</h2>
  </Link>
  <p>{location.address}</p>
  <p>{location.city}, {location.state} {location.zip}</p>
</li>
// eslint-disable-next-line no-restricted-globals

const MyLocation = () => {
  return (
    <div>
      <h1>Our Locations</h1>
      <p>We have several convenient locations to serve you:</p>
      <LocationList />
    </div>
  );
};

const LocationList = () => {
  // eslint-disable-next-line no-restricted-globals

  const locations = [
    { name: 'Location 1', address: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
    { name: 'Location 2', address: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' },
    // add more locations as needed
  ];

  return (
    <ul>
      {locations.map((location, index) => (
        <LocationItem key={index} location={location} />
      ))}
    </ul>
  );
};
// eslint-disable-next-line no-restricted-globals
const LocationItem = ({ location }) => {
  return (
    <li>
      <h2>{location.name}</h2>
      <p>{location.address}</p>
      <p>{location.city}, {location.state} {location.zip}</p>
    </li>
  );
};

export default MyLocation;