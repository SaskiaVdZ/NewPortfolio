import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "0px" }}>
      <Grid container spacing={3} direction="column" justify="center">
        <Grid item xs={12}>
          <Paper elevation={3} style={{ backgroundColor: "pink" }}>
            <img src="./images/banner.jpeg"/>
        

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
