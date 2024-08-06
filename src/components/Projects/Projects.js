import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import game from "../../Assets/Projects/game.png";
import todoApp from "../../Assets/Projects/todoApp.png";

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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
