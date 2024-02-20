import { Routes, Route } from "react-router";
import "@fontsource/inter/400.css";
import "@fontsource/merriweather/300.css";
import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import About from './components/About';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Container from "@mui/material/Container";

import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import ContactFooter from "./components/Contact";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFF", //White (background navbar)
      accent1: "#FBF1A9", // Light-yellow
      accent2: "#E8FDF5", //Washed-green
      accent3: "#FFDFDF", //Washed-Red
      accent4: "#E0DAFC", //Light purple
      accent5:"#9CE5CA", //Mint-green
      accent6: "#FFD700", // Dark-yellow
    },
  
    text: {
      primary:"#E7040F",
    }
  },
 
  typography: {
    fontFamily: ["Merriweather", "Inter"],
  },
  
  paper: { 
    elevation: 0, borderRadius: 20, borderColor: "#000", padding: 50 },

  shape: {
    borderadius: 16,
  }
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
          </Routes>
          <ContactFooter />
        </header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
