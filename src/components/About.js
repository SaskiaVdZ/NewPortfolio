import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Banner from "./images/Banner1280.png";
import MoreAbout from "./MoreAbout";


function About() {
    return (
      <>
      <Grid container
      justify="center"
      overflow="hidden">
       <Grid><img src={Banner} alt="Floating components"/></Grid>
        <Grid item><Paper>
            <Typography variant="h4" padding={5}>
              Hi! My name is Saskia.
            </Typography>
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
