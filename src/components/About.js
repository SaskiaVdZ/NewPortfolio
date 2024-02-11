import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Banner from "./images/Banner.jpg";

function About() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "0px" }}>
      <Grid container spacing={3} direction="column" justify="center" style={{ margin: "0px" }}>
        <Grid item xs={12} style={{ margin: "0px" }}>

          <Paper elevation={3} style={{ margin: "0px" }}>
          <img src={Banner}/>
        

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
