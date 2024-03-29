import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

export default function Skills() {
  return (
    <>
    <Typography variant="h3" align="center" margin="6rem 0 3rem">
        Skills
      </Typography>
    <Grid container 
        spacing={3} 
        direction="row"
        justify="center"
        alignItems="stretch">
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper  sx={{ backgroundColor:'primary.accent3'}}>
          <BuildIcon sx={{ mt: 4 , fontSize: '4rem' }}  />
          <Typography sx={{ mb: 2, p:5 }}  variant="h6">
          HTML5, CSS3, Sass, JavaScript, React, Material UI, Bootstrap
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper sx={{ backgroundColor:'primary.accent3'}}>
          <ConstructionRoundedIcon sx={{ mt: 4, fontSize: '4rem' }} />
          <Typography sx={{ mb: 2, p:5 }}  variant="h6">
          Responsive Web Design, Git/GitHub, Visual Studio Code, Agile work
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper sx={{ backgroundColor:'primary.accent3'}}>
          <LanguageRoundedIcon sx={{ mt: 4 , fontSize: '4rem'}} />
          <Typography sx={{ mb: 2, p: 5 }} variant="h6">
          Fluent in spoken and written English, Swedish and Dutch
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper sx={{ backgroundColor:'primary.accent3'}}>
          <HandshakeRoundedIcon sx={{ mt: 4, fontSize: '4rem'  }}/>
          <Typography sx={{ mb: 2, p: 5 }} variant="h6">
          Communication, Mentoring, Team-work, Troubleshooting, Time management
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper sx={{ backgroundColor:'primary.accent3'}}>
          <ComputerRoundedIcon sx={{ mt: 4, fontSize: '4rem' }}/>
          <Typography sx={{ mb: 2, p: 5 }} variant="h6">
          Photoshop, Adobe Illustrator, InDesign, Google Suite, Figma
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
        <Paper sx={{ backgroundColor:'primary.accent3'}}>
          <BrushRoundedIcon sx={{ mt: 4, fontSize: '4rem' }}/>
          <Typography sx={{ mb: 2 , p: 5}} variant="h6">
            Design thinking, Design process, Graphic design, Illustration
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </>
  );
}
