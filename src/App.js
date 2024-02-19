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
import Container from "@mui/material/Container";

import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFF", //White background navbar
      light: "#FFDFDF", //Washed-Red
      accent: "#FBF1A9", // Light-yellow
    },
    secondary: {
      main: "#9CE5CA", //Mint-green
      light: "#E8FDF5", //Washed-green
      accent: "#FFD700", // Dark-yellow
      accent2:"#e0dafc", //Light purple
    },
    tertiary: {
      main: "#E7040F", // Dark-red
    }
  },
  typography: {
    fontFamily: ["Merriweather", "Inter"],
  },
  paper: { elevation: 0, borderRadius: 20, borderColor: "#000", padding: 50 }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App"> 
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
