import React from 'react';

function getContact({ data }) {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {/* Add more data fields as needed */}
    </div>
  );
}

export default getContact;