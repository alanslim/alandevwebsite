import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Window,
  WindowContent,
  WindowHeader,
  Button
} from "react95";

const ProjectsComponent: React.FC = () => (
  <div className="d-flex px_600">
    <div style={{ width: "100%" }}>
        <NavLink className="nav-link spc" to="/">
        <Button>
          Go back
          </Button>
        </NavLink>
    </div>
    <Container>
    <div className="desktop-windows">
      <Window style={{ width: 600, marginLeft: 50,}}>
        <WindowHeader>Projects.exe</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Link</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>
                  <span role="img" aria-label="LEAF">
                    HTML/CSS website
                  </span>
                </TableDataCell>
                <TableDataCell>os2.kz</TableDataCell>
                <TableDataCell>
                  <a href="https://www.os2.kz/">Click</a>
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>
                  <span role="img" aria-label="fire">
                    Web application
                  </span>
                </TableDataCell>
                <TableDataCell>os2.kz/tamek</TableDataCell>
                <TableDataCell>
                  <a href="https://www.os2.kz/tamek/">Click</a>
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>
                  <span role="img" aria-label="lightning">
                    Mobile application
                  </span>
                </TableDataCell>
                <TableDataCell>ONAY CLONE</TableDataCell>
                <TableDataCell>
                  <a href="https://github.com/alanslim/onay/">Click</a>
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
      </div>
      <div className="mobile-windows">
        <ul>
            <li> <a href="https:/www.os2.kz">os2.kz</a></li>
            <li>  <a href="https:/www.os2.kz/tamek">tamek react app</a></li>
            <li>  <a href="https://github.com/alanslim/onay/">onay react-native</a></li>
        </ul>
      </div>
    </Container>
  </div>
);

export default ProjectsComponent;
