// AllCourses.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AllCourses() {
  return (
    <div>
      <h2>All Courses</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
        <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/marcimus.png" className="img-fluid" height={150} width={150} />
            <Card.Body>
              <Card.Title>Full Stack Development</Card.Title>
              <Card.Text>
              A Full stack development is the process of building both the front-end and back-end of an application.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/marcimus-red.png" />
            <Card.Body>
              <Card.Title>Data Science</Card.Title>
              <Card.Text>
              Data science is an academic field that uses scientific methods, algorithms, and systems to extract insights from data.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png" />
            <Card.Body>
              <Card.Title>Cyber Security</Card.Title>
              <Card.Text>
              Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. 
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
