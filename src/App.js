import '@fontsource/inter/400.css';
import '@fontsource/merriweather/300.css';
import './App.css';
import Types from './Types';
import Test from './Test';
import Skills from './Skills';
import ResponsiveAppBar from './NavBar';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';



const theme = createTheme({
  
  
  palette: {
    primary: {
      main: '#E7040F'
    },
    secondary: {
      main: '#9CE5CA'
    },
  },
  typography: {
    fontFamily: [
      'Merriweather',
      'Inter'
    ]    
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
       <ResponsiveAppBar />
       <Types />
       <Test />
       <Skills />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
