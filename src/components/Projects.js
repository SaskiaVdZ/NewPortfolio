import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Banner from "./images/small.png";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DataProjects from "../DataProjects.json";
import Paper from "@mui/material/Paper";

export default function AccordionProjects() {
  return (
    <>
      <Typography variant="h3" align="center" margin="6rem 0 3rem">
        Projects
      </Typography>
      <Grid container justifyContent="space-evenly" >
        {DataProjects.map((result, index) => (
          <Grid item key={index}>
            <Card
              sx={{ maxWidth: 'sm', m: 2 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={result.img}
                alt="project image"
              />
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Stack spacing={2}>
                    <Typography variant="h4">{result.title}</Typography>
                    <Typography variant="h6" align="left">
                      {result.intro}
                    </Typography>
                    <ExpandMoreIcon />
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Typography variant="h6" align="left">
                      {result.par1}
                    </Typography>
                    <Typography variant="h6" align="left">
                      {result.par2}
                    </Typography>
                    <Typography variant="h6" align="left">
                      {result.par3}
                    </Typography>
                    <Typography variant="h6" align="left">
                      {result.par4}
                    </Typography>
                  </Stack>
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    variant="contained"
                    size="large"
                    align="center"
                    color="secondary"
                  >
                    Code
                  </Button>
                  <Button variant="outlined" size="large" align="center">
                    Live
                  </Button>
                </AccordionActions>
              </Accordion>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Paper component={Stack} direction="column" justifyContent="center"
            style={{backgroundImage: "linear-gradient(#FBF1A9,#9CE5CA)",
            color: "red",}}
            
            sx={{ width: 1/2 , height: 200}}
    
            ><Typography variant="h3" >REACT </Typography>
            <Typography variant="h5">Drag 'n Drop Game</Typography></Paper>
        <Paper component={Stack} direction="column" justifyContent="center"
            style={{backgroundImage: "linear-gradient(#FBF1A9,#9CE5CA)",
            color: "red",}}
            
            sx={{ width: 1/2 , height: 200}}
    
            ><Typography variant="h3" >JAVASCRIPT</Typography>
            <Typography variant="h5">Expense & Income Tracker</Typography>
            </Paper>
    <Paper component={Stack} direction="column" justifyContent="center"
            style={{backgroundImage: "linear-gradient(#FBF1A9,#9CE5CA)",
            color: "red",}}
            
            sx={{ width: 1/2 , height: 200}}
    
            ><Typography variant="h3" >HTML, CSS & SASS</Typography>
            <Typography variant="h5">Portfolio Website</Typography>
            </Paper>
    </>
  );
}
