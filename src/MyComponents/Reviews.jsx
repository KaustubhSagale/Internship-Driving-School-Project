import React from 'react'
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Reviews.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div className='scrollable-card-listt'>
<h2>CUSTOMER REVIEWS</h2>
    
      
      <div className='scrollable-card-list'>
<CardGroup className='g'>
      <Card>
        <Card.Body>
          
          <Card.Text className='lp'>
          Alexandra M.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted " style={{ color: 'red' }}>Excellent Instructors! 🌟🌟🌟🌟🌟 <br/>
Patient, knowledgeable, and friendly. <br /> </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text className='lp'>
          Daniel K.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Flexible Scheduling! 🌟🌟🌟🌟🌟<br/>
Convenient for busy schedules. <br /> </small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Body>
          <Card.Text className='lp'>
          Sophie L.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Well-Maintained Cars! 🌟🌟🌟🌟🌟<br/>
Safe and comfortable vehicles.<br /> </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text className='lp'>
          Jason P.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Affordable and Value! 🌟🌟🌟🌟🌟<br/>
Great quality for the cost.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text className='lp'>
          Emily W.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Overall Fantastic Experience! 🌟🌟🌟🌟🌟<br/>
Highly recommend for confident driving.</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    <h5><em>TRUSTED BY THOUSANDS</em></h5>
<h5>Satisfied Customer Feedback</h5>
    </div>
 
    </div>
  )
}

export default Reviews
