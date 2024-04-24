import React from 'react';

const Card = ({ title, content, color }) => {
  return (
    <div className={`card text-white bg-${color} mb-3`} style={{ width: '18rem' }}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{content}</h5>
      </div>
    </div>
  );
};

export default Card;