import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Banner from "./images/small.png";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Data from "../Data.json";

export default function AccordionProjects() {
  return (
<>
    <Typography variant="h3" align="center" margin="6rem 0 3rem">
        Projects
      </Typography>
    <Grid container>
        {Data.map((result,index)=>(
            <Grid item key={index}>
      <Card variant="elevation" elevation={1} style={{ margin: "20px", borderRadius:'16px' }}>
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
          <Typography variant="h5">{result.title}</Typography>
          <Typography>
          {result.intro}
          </Typography>
          <ExpandMoreIcon />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <Stack spacing={2}>
        <Typography>
        {result.par1}
          </Typography>
          <Typography>
          {result.par2}
          </Typography>
          <Typography>
          {result.par3}
          </Typography>
          <Typography>
          {result.par4}
          </Typography>
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined" size="small">Code</Button>
          <Button variant="outlined" size="small">Live</Button>
        </AccordionActions>
      </Accordion>
      </Card>
      </Grid>
      ))}
      </Grid>
      </>
  );
}

      
    