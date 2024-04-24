import React from 'react'
import { Card } from 'react-bootstrap'
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Card.css';


function Cards() {
  return (
    <div className="cards-container">
      <Card className="custom-card" >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="b">
          <Card.Text className='p'>
          Drive safe, Driver smart
          </Card.Text>
        </Card.Body>
        <Card.Footer className='f'>
         We make it easier for you to get your driver's license.
        </Card.Footer>
      </Card>
      
    </div>
  );
}

export default Cards;
