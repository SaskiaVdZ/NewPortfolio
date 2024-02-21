import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DataWork from "../DataWork.json";
import DataEducation from "../DataEducation.json";

export default function Experience() {
  return (
    <>
      <Typography variant="h3" align="center" margin="6rem 0 3rem">
        Experience
      </Typography>
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            Work
          </Typography>
          {DataWork.map((result, index) => (
            <Grid item key={index}>
              <Typography>{result.where} </Typography>
              <Typography>{result.when}</Typography>
              <Typography>{result.what}</Typography>
              <Divider variant="middle" sx={{ mb: 4, mt: 4 }} />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            Education
          </Typography>
          {DataEducation.map((result, index) => (
            <Grid item key={index}>
              <Typography>{result.where} </Typography>
              <Typography>{result.where2} </Typography>
              <Typography>{result.when}</Typography>
              <Typography>{result.what}</Typography>
              <Divider variant="middle" sx={{ mb: 4, mt: 4 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
