import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Facial from "../../Assets/Projects/Facial.png";
import ecommerece from "../../Assets/Projects/ecommerece.png";
import Todo from "../../Assets/Projects/Todo.png";
import Password from "../../Assets/Projects/Password.png";
import Currency from "../../Assets/Projects/Currency.png";
import Weather from "../../Assets/Projects/Weather.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="ToDo List App"
              description="A simple and efficient To-Do List application built with React.js, allowing users to manage tasks with features like adding, editing, deleting, and marking tasks as complete."
              ghLink="https://github.com/chtayyab-wq/ToDo-list-app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Password}
              isBlog={false}
              title="Passwords Generator"
              description="A Password Generator application built with React.js that creates strong, random passwords based on user-defined criteria such as length and character types, enhancing online security."
              ghLink="https://github.com/chtayyab-wq/Passwords-Generator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Currency}
              isBlog={false}
              title="Currency Convertor"
              description="A Currency Converter application built with React.js that allows users to convert amounts between different currencies using real-time exchange rates, providing an intuitive and user-friendly interface."
              ghLink="https://github.com/chtayyab-wq/Currency-Convertor.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerece}
              isBlog={false}
              title="E-Commerce App"
              description="An E-Commerce web application developed using MERN stack (MongoDB, Express.js, React.js, Node.js) that offers features like product browsing, user authentication, shopping cart, and secure checkout process."
             ghLink="https://github.com/chtayyab-wq/E-Commerce-App-.git"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Facial}
              isBlog={false}
              title="Real Time Attendence Monitoring System Using Facial Recognition"
              description="A Real-Time Attendance Monitoring System utilizing Facial Recognition technology, developed with Python and OpenCV, to automate attendance tracking by identifying individuals through their facial features."
              ghLink="https://github.com/chtayyab-wq/Real-Time-attendance-monitoring-system-using-facial-Recognition-FYP.git"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Simple Weather App Using API"
              description="A Simple Weather App built with React.js and a Weather API, providing real-time weather information and forecasts for any location."
             // ghLink="https://github.com/chtayyab-wq/Real-Time-attendance-monitoring-system-using-facial-Recognition-FYP.git"
               demoLink="https://www.linkedin.com/posts/muhammad-tayyab-b5bab92b0_webdevelopment-javascript-weatherapp-activity-7369312842811883521-Ync7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErp9jcBwTPGHvwXKcSV207iuGT6g5C7MYw"    
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
