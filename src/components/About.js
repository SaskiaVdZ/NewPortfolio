import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Banner from "./images/Banner.jpg";

function About() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "0px" }}>
      <Grid container spacing={3} direction="column" justify="center" style={{ margin: "0px" }}>
        <Grid item xs={12}>
          <Paper xs={12} >
          <img src={Banner}/>
          <Paper>
            <Typography variant="h2" align="left" padding={5}>Hi! My name is Saskia.</Typography>
            <Typography variant="h2" align="left" padding={5}>I am a curious junior front-end developer who just finished a full-time
        accelerated vocational course at Sundsgården folkhögskola:  IT/Tech for women - Front end Development.
        I&#39;m currently learning React and studying Flutter at The App brewery
        and looking forward to dive into Data Visualisation D3.js at the New
        York University, shortly.</Typography>
          </Paper>
        

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
