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
          <Typography variant="h5" align="left" sx={{ mb: 2 }}>
            Work
          </Typography>
          {DataWork.map((result, index) => (
            <Grid item key={index}>
              <Typography variant="h6" align="left">{result.where} </Typography>
              <Typography variant="h6" align="left" fontStyle="italic">{result.when}</Typography>
              <Typography variant="h6" align="left">{result.what}</Typography>
              <Divider variant="middle" sx={{ mb: 4, mt: 4 }} />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Typography variant="h5" align="left" sx={{ mb: 2 }}>
            Education
          </Typography>
          {DataEducation.map((result, index) => (
            <Grid item key={index}>
              <Typography variant="h6" align="left">{result.where} </Typography>
              <Typography variant="h6" align="left">{result.where2} </Typography>
              <Typography variant="h6" align="left" fontStyle="italic">{result.when}</Typography>
              <Typography variant="h6" align="left">{result.what}</Typography>
              <Typography variant="h6" align="left">{result.what2}</Typography>
              <Divider variant="middle" sx={{ mb: 4, mt: 4 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
