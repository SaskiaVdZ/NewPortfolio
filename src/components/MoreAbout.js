import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";



function MoreAbout() {
    return (
      
      <Grid 
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="flex-start"
        >
        <Grid item xs={4}
        >
          <Paper sx={{backgroundColor:'primary.accent3', borderRadius:'16px'}}>
            <Typography variant="h5" padding={5}>
              I am an experienced design professional with more than 20 years of
              teaching and mentoring experience.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I consider myself a life-long learner, always hungry to study and
              learn more.
            </Typography >
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I&#39;m a creative problem solver and I like to make things
              understandable by turning complex stuff into mini bite-size bits
              and steps.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I&#39;m dedicated, structured, analytical, curious and not afraid
              to ask questions. 
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I can't leave things alone until they are solved.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
             I love to build and create in general but I especially love to create meaning and value.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I live in a small place called Sångshyttan, in Bergslagen, right
              in between Stockholm and Oslo.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              I moved from Amsterdam to Sweden
              approximately 20 years ago.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{backgroundColor:'primary.accent3'}}>
            <Typography variant="h5" padding={5}>
              In my spare time I like to read, write, draw, do yoga and walk
              with my dog.
            </Typography>
          </Paper>
          </Grid>
        </Grid>
    );
  }
  
  export default MoreAbout;