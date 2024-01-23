import MainComponent from "./components/MainComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent.tsx";
import ContactComponent from "./components/ContactComponent/ContactComponent.tsx";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { styleReset } from "react95";
import { createGlobalStyle } from "styled-components";
import Wrapper from "./Wrapper.tsx";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <Wrapper style={{ minHeight: "900px" }}>
    <GlobalStyles />

    <Router>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contacts" element={<ContactComponent />} />
        </Routes>
    </Router>
  </Wrapper>
);

export default App;
