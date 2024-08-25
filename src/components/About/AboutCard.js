import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <br />I am{" "}
            <span className="purple">Ayesha Shamail </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently working as a frontend developer at Ripplr.
            <br />I have completed my Bachelors in Electrical and Electronics
            Engineering at SSIT, Tumakuru.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
