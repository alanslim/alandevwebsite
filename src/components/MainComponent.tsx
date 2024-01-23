import React from "react";
import "../style.scss";
import { NavLink } from "react-router-dom";

import { Container } from "react-bootstrap";


const MainComponent: React.FC = () => (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="marcus_img">
          <img src="./marcus2.png" />
          <h1 className="big_h1">Alan Altindis</h1>
          <p>Frontend developer from Almaty</p>
        </div>
        <div className="ul_main">
          <ul>
            <li>
              <NavLink className="nav-link" to="/projects">
                 My Projects 
              </NavLink>
            </li>
            <li><NavLink className="nav-link" to="/about">
                 About Me
              </NavLink></li>
            <li><NavLink className="nav-link" to="/contacts">
                 Contacts
              </NavLink></li>
          </ul>
        </div>
      </Container>
);

export default MainComponent;
