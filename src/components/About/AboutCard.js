import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Yashraj Nair</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I'm currently a student at{" "}
            <span className="purple">Reva University</span>.
            <br />
            I'm pursuing a degree in{" "}
            <span className="purple">B.Tech Computer Science and System Engineering</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
