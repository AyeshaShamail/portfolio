import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import game from "../../Assets/Projects/game.png";
import todoApp from "../../Assets/Projects/todoApp.png";
import calculator from "../../Assets/Projects/calculator.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Built a calculator using JavaScript, featuring basic arithmetic operations including addition, subtraction, multiplication, and division. The interface is user-friendly, with a responsive design that adapts to various screen sizes. The calculator ensures accurate calculations and provides an intuitive experience for users."
              ghLink="https://github.com/AyeshaShamail/calculator/"
              demoLink="https://ayeshashamail.github.io/calculator/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A WeatherApp built with React and Axios that allows users to enter a city name and fetch the current weather information, displaying temperature in Celsius and weather conditions using data from the OpenWeatherMap API"
              ghLink="https://github.com/AyeshaShamail/weather-app"
              demoLink="https://ayeshashamail.github.io/weather-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A TicTacToe game built with React, featuring a 3x3 grid where players can take turns marking 'X' or 'O' on the board, with logic to determine and display the winner"
              ghLink="https://github.com/AyeshaShamail/tic-tac-toe/"
              demoLink="https://ayeshashamail.github.io/tic-tac-toe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todo App"
              description="Todo App is a task management application that allows users to add, edit, delete, and mark tasks as completed. The app stores tasks in the browser's local storage, ensuring tasks persist even after the page is refreshed. Users can toggle the visibility of completed tasks and manage their todo list efficiently with an intuitive user interface built with React and styled with Tailwind CSS"
              ghLink="https://github.com/AyeshaShamail/react-todo-app"
              demoLink="https://ayeshashamail.github.io/react-todo-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Shamaya Store"
              description="Created a dynamic e-commerce website using a third-party API to showcase products. Implemented grid and list views, along with filtering by brand, category, and price, and sorting options. Key features include detailed product pages, search functionality, user authentication, and an add-to-cart option. Emphasized responsive design and user experience for a seamless shopping experience."
              ghLink="https://github.com/AyeshaShamail/E-commerce"
              demoLink="https://ayeshashamail.github.io/E-commerce/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
