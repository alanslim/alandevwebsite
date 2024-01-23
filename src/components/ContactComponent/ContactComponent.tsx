import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {Button} from "react95";

const ContactComponent: React.FC = () => (
  <>
    <div style={{ width: "100%" }}>
      <NavLink className="nav-link spc" to="/">
        <Button>Go back</Button>
      </NavLink>
    </div>
    <Container>
      <h1 className="big_h1">Contact Me:</h1>
      <ul>
        <li className="big_p">
          Instagram:
          <a href="https://www.instagram.com/alanltnds/"> @alanltnds</a>
        </li>
        <li className="big_p">
          Telegram: <a href="t.me/antiquerex">antiquerex</a>
        </li>
        <li className="big_p">
          Linkedin:
          <a href="https://www.linkedin.com/in/alan-altindis-782485130/">
             Alan Altindis
          </a>
        </li>
        <li className="big_p">
          Phone: <a href="tel: +77770535867">+77770535867</a>
        </li>
        <li className="big_p">
          Github: <a href="https://github.com/alanslim">alanslim</a>
        </li>
      </ul>
    </Container>
  </>
);

export default ContactComponent;
