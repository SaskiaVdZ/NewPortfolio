import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Banner from "./images/small.png";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function AccordionProjects() {
  return (
    <div>
      <Card variant="elevation" elevation={3} style={{ margin: "20px" }}><img src={Banner} alt="Floating components"/>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Stack spacing={2}>
          <Typography variant="h5">Drag and Drop Game - React</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <Stack spacing={2}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <Button>Code</Button>
          <Button>Live</Button>
        </AccordionActions>
      </Accordion>
      </Card>

      <Card variant="elevation" elevation={3} style={{ margin: "20px" }}><img src={Banner} alt="Floating components"/>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Income & Expense tracker - Javascript
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Code</Button>
          <Button>Live</Button>
        </AccordionActions>
      </Accordion>
      </Card>

      <Card variant="elevation" elevation={3} style={{ margin: "20px" }}><img src={Banner} alt="Floating components"/>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Genesis - HTML, CSS, Sass
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Code</Button>
          <Button>Live</Button>
        </AccordionActions>
      </Accordion>
      </Card>

    </div>
  );
}