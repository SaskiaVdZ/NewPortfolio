import * as React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


export default function Skills() {

  return (
    <Grid container
    justifyContent="space-evenly">

<Grid item>
      <Paper>
        <Grid item>
        <Typography>Work</Typography>
        <Typography>Work</Typography>
        <Typography>Work</Typography>
        </Grid>
        
        <Grid item>
        <Typography>Work</Typography>
        <Typography>Work</Typography>
        <Typography>Work</Typography>
        </Grid>
      </Paper>
      </Grid>

     <Grid item>
      <Paper>
        <Grid item>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        </Grid>

        <Grid item>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        </Grid>
        
      </Paper>
      </Grid>

      </Grid>
  );
}