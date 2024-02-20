import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Banner from "./images/Banner1280.png";
import MoreAbout from "./MoreAbout";
import Typewriter from 'typewriter-effect';
import CardMedia from "@mui/material/CardMedia";


function About() {
    return (
      <>
      <Grid container
      justify="center"
      overflow="hidden">
       
        <Grid item sx={{mt:5, mb:6}}>
       
          <Paper sx={{backgroundColor:'primary.accent1', borderRadius:'8px'}} elevation= {0}>
          <CardMedia sx={{borderRadius:'8px'}}
                component="img"
                height="400"
                image={Banner}
                alt="Floating components"
              />
              <Typewriter className="Type"
        options={{
          strings: ['Hi! My name is Saskia', 'Welcome to my portfolio', 'here you can read about who I am', 'and see some of my projects'],
          autoStart: true,
          loop: true,
        }}
      />
            <Typography variant="h4" textAlign="left" padding={5}>
              I am a curious junior front-end developer who just finished a
              full-time accelerated vocational course at Sundsgården
              folkhögskola: IT/Tech for women - Front end Development. I&#39;m
              currently learning React and studying Flutter at The App brewery
              and looking forward to dive into Data Visualisation D3.js at the
              New York University, shortly.
            </Typography>
            </Paper></Grid>
        </Grid>
      <MoreAbout />
      </>
    );
  }
  
  export default About;
