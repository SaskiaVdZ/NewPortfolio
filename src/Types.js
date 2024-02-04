import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 600,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1440 }}>
      
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Button variant="contained">Hello world</Button>
      <DemoPaper variant="elevation" elevation={3}>More text in paper</DemoPaper>
      <Card variant="outlined" sx={{ minWidth: 200, width:350, maxWidth:450 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>

  


  );
}
