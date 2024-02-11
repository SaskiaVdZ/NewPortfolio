import { Routes, Route } from "react-router";
import "@fontsource/inter/400.css";
import "@fontsource/merriweather/300.css";
import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import About from './components/About';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Contact from './components/Contact';


import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Router } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E7040F",
    },
    secondary: {
      main: "#9CE5CA",
    },
  },
  typography: {
    fontFamily: ["Merriweather", "Inter"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Experience" element={<Experience />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
