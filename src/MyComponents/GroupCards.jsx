import React from 'react'

import '/Users/kaustubhsagale/Desktop/carproject/src/styles/GroupCards.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Container } from 'react-bootstrap';
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/GroupCards.css';
const GroupCards = () => {
  

  return (<>
  <div className='k' >
    <h1 className='ik'>Our Services </h1>
    <p className='pk'>
    <h2 className='ik'>We Provide Services For You</h2>  
    </p>
      <div className='scrollable-card-list'>
<CardGroup className='g'>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabgJczem_XobplZbDjUL6ui0p-bYDL6Gv7g&usqp=CAU"  className="card-img-top"/>
        <Card.Body>
          
          <Card.Text>
            Instructor Training
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><em><strong>Brainstorm words related to <br /> confidence & skill.</strong></em></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeG5zvHFUdcLLZW-pH1S8WiglfV-zLfi8YQ&usqp=CAU" />
        <Card.Body>
          <Card.Text>
           Video Courses
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><em><strong>Brainstorm words related to <br /> confidence & skill.</strong></em></small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaLGhoVYqo6lAAf4CZ0xdwbCc36Vw9Pazvg&usqp=CAU" />
        <Card.Body>
          <Card.Text>
            Easy Learn Driving
          </Card.Text>
        </Card.Body>
        <Card.Footer >
          <small className="text-muted"><em><strong>Our course module is very <br /> easy to learn</strong></em></small>

        </Card.Footer>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Text>
            Get License
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><em><strong>A driving is an official <br />  document that authorize.</strong></em></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsJVVX06qyiUcWJ5uGo5-9Xt6sLXIE5lTGg&usqp=CAU" />
        <Card.Body>
          <Card.Text>
          Traffic Guideline
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><em><strong>We also teach a full and final<br />  traffic guideline for you.</strong></em></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </div>
    </>
  )
}

export default GroupCards;
