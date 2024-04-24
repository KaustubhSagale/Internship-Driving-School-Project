import React from 'react'
// import './Features.css';
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Features.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
    const titles = ["EXPERIENCED INSTRUCTORS", "AFFORDABLE FEE", "FEMALE INSTRUCTORS", "LICENSE TRAINING","BEST SAFETY MEASURES","24X7 CUSTOMER SUPPORT"];
    const cardTexts = [
      "Our instructors undergo vigorous training before they are deemed fit to give driving lessons to our candidates. We ensure that you learn from the best so that you can be the best!",
      "Forever Driving School offers the most affordable and competitive fees in the tri-city. With flexible payment options, we provide complete support and satisfaction to our candidates.",
      "Our team consists of both male and female driving instructors so that we can provide the best service to our candidates. Generally, female candidates are more comfortable learning from a female instructor.",
      "Getting a license requires you to clear a written exam along with the driving test. At Forever Driving School, we train you to excel both in your driving test as well as the written exam.",
      "You can't be a Pro Driver in India unless you are trained for the best safety measures. At Forever Driving School, we make sure that you get trained to handle the chaos of the Indian traffic.",
      "Forever Driving School provide 24x7 customer support to all it's clients."
    ];
    return (
    <div className='npk'>
      
<h2 style={{ color: 'black' }}>SOME AWESOME FEATURES</h2>
<h5 className='oo'>Ahen Driving School Provides Some Unique and Awesome Driving Courses in Pune, Start Your Driving Classes with Ahen Driving School. We are sure you will master the art of driving,<strong>Let’s Get You On The Road!
Are You Ready To Start your Driving Course? if you said Yes, You Are In Safe Hands. Find Out More And Book if Your Driving Course Now!</strong>
</h5>

<Container>
      <Row xs={1} md={2} className="g-44">
        {/* First Row */}
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card bg=' text-black' className='cc'>
              <Card.Body className='b'>
                <Card.Title style={{ color: '#ff006e' }}>{titles[idx]}</Card.Title>
                <Card.Text className='tt'>{cardTexts[idx]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row xs={1} md={2} className="g-55">
        {/* Second Row */}
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx + 3}>
            <Card bg=' text-black' className='cc' >
              <Card.Body className='b'>
                <Card.Title style={{ color: '#ff006e' }}>{titles[idx + 3]}</Card.Title>
                <Card.Text className='tt'>{cardTexts[idx + 3]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>


    </div>
  )
}

export default Features
