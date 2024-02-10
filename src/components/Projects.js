import * as React from 'react';
import Data from '../Data.json';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function ProjectCards () {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <Container max-width='1g' style= {{marginTop:"50px"}}>
    <Typography variant="h3" align="center">Projects</Typography>
    <Grid container spacing ={5} style={{marginTop:"20px"}}>
        {Data.map((result,index)=>(
            <Grid item xs={12} md={4} key={index}>


  <Card variant="elevation" elevation={3} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={result.img}
        alt="project image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {result.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Code</Button>
        <Button variant="outlined" size="small">Live</Button>
      </CardActions>
      <CardActions disableSpacing>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" paragraph>More:</Typography>
          <Typography variant="body2" color="text.secondary"  paragraph>
          We started of by deciding on a functionality and then came up with a design. We then sketched the general user flow and set up the basic project structure and made a protype in Figma. After that we divided the different features among the members of the team to get started with the logic. The team hade weekly checkin meetings and communicated continuously on Slack and Github Projects.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
          Features: Drag and drop using use-gesture Create account functionality, details stored in json-server Login authentication using global state, React Context userId and position of dragged elements saved in localStorage Global state updating userId from localStorage as long as the user id logged in, to avoid state being lost on refresh, Logout function clearing global state + userId from localStorage Reset button in game to return all elements to their respective starting position Axios React routes Private routes,require login, together with useParams hook React hooks useContect useState useParams useEffect useNavigate.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
          My contribution: I made the building elements and the drag and drop function using the @use-gesture library. I also made the profile page and the display of the user details, I came up with the idea of the game, the name and the design and made a prototype in Figma.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
          This game was built by Diana Undén, Saskia van der Zanden, Maria Persson, Nadine Dawod and Mo Wei Wu.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>Built on: React Vite</Typography>
        </CardContent>
      </Collapse>
    </Card>

            </Grid>
        ))}
    </Grid>
</Container>
    )
}


