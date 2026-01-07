import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Chatgpt from "../../Assets/TechIcons/Chatgpt.svg";
import grok from "../../Assets/TechIcons/grok.svg";
import github from "../../Assets/TechIcons/github.svg";
import Replit from "../../Assets/TechIcons/Replit.svg";
import Cursor from "../../Assets/TechIcons/Cursor.svg";
import windsurf from "../../Assets/TechIcons/windsurf.svg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Chatgpt} alt="Chatgpt" className="tech-icon-images" />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={grok} alt="grok" className="tech-icon-images" />
        <div className="tech-icons-text">Grok</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={github} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">Github Copilot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Replit} alt="Replit" className="tech-icon-images" />
        <div className="tech-icons-text">Replit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Cursor} alt="Cursor" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={windsurf} alt="windsurf" className="tech-icon-images" />
        <div className="tech-icons-text">Windsurf</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
