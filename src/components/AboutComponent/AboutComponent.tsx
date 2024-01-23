import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import { NavLink } from "react-router-dom";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import Image from 'react-bootstrap/Image';

const AboutComponent: React.FC = () => {
  const [isWindowVisible, setWindowVisible] = useState(true);

  const toggleWindowVisibility = () => {
    setWindowVisible(!isWindowVisible);
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <NavLink className="nav-link spc" to="/">
          <Button>Go back</Button>
        </NavLink>
      </div>
      <Container style={{ marginTop: "7%" }}>
        <h1 className="big_h1">
          Hello, my name is Alan. I'm 26 yrs old software developer from Almaty
        </h1>
        <p className="big_text">
          There is a list of reasons why you should choose me:
        </p>
      </Container>
<div className="desktop-windows">
      <Window
        resizable
        className="window"
        style={{ width: "50%", marginTop: "2%" }}
      >
        <WindowHeader className="window-title">
          <span>AboutMe.exe</span>
          <Button style={{ left: "83%" }}>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <ul>
            <li>* Im profient in React, Redux, RTK, React Router Dom</li>
            <li>
              * Im also interested in backend. I know Node js, express js. Im
              also learning php rn
            </li>
            <li>
              * I know some wordpress, including WPGatsby and WPGraphQL =)
            </li>
            <li> * MySQL, SQLite, MariaDB, Postgres</li>
            <li>
              * Git, Github, Prettier, Vite, Sass, Scss and of course
              HTML/CSS/VanillaJS
            </li>
            <li> * Im cool, funny, smart, communicative</li>
            <li>
              * My cat will be sad if you don't hire me, you can see his photo
              below!
            </li>
          </ul>
        </WindowContent>
        <Frame
          variant="well"
          className="footer"
          onClick={toggleWindowVisibility}
          style={{cursor: 'pointer'}}
        >
          Click here to see my cat!
        </Frame>
      </Window>
      <Draggable>
        <Window
          resizable
          className={`window ${isWindowVisible ? "dnone" : ""}`}
          style={{ width: "300px", height: "300px", marginTop: "2%" }}
        >
          <WindowHeader className="window-title">
            <span>cat.exe</span>
            <Button
              style={{ marginLeft: "80%", bottom: "32px", left: "26px" }}
              onClick={toggleWindowVisibility}
            >
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <WindowContent style={{ textAlign: "center" }}>
            <img
              src="./leo.png"
              width={"200px"}
              height={"200px"}
              alt="my cool cat"
            />
            <p>His name is leo btw</p>
          </WindowContent>
        </Window>
      </Draggable>
      </div>
      <div className="mobile-windows">
        <Container>
        <ul>
            <li>* Im profient in React, Redux, RTK, React Router Dom</li>
            <li>
              * Im also interested in backend. I know Node js, express js. Im
              also learning php rn
            </li>
            <li>
              * I know some wordpress, including WPGatsby and WPGraphQL =)
            </li>
            <li> * MySQL, SQLite, MariaDB, Postgres</li>
            <li>
              * Git, Github, Prettier, Vite, Sass, Scss and of course
              HTML/CSS/VanillaJS
            </li>
            <li> * Im cool, funny, smart, communicative</li>
            <li>
              * My cat will be sad if you don't hire me, you can see his photo
              below!
            </li>
          </ul>
          <Image src="./leo.png" roundedCircle></Image>
          <p>His name is leo btw</p>
        </Container>
      </div>
    </>
  );
};

export default AboutComponent;
