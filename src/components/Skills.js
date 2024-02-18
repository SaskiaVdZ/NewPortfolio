import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";
import { pink } from "@mui/material/colors";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

export default function Skills() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper>
          <BuildIcon sx={{ color: pink[500] }} fontSize="large" />
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
          HTML5, CSS3, Sass, JavaScript, React, Material UI, Bootstrap
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <ConstructionRoundedIcon sx={{ color: pink[500] }} fontSize="large" />
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
          Git/GitHub, Visual Studios Code, Figma, Agile work
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <LanguageRoundedIcon sx={{ color: pink[500] }} fontSize="large" />
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
          Fluent in English, Swedish and Dutch
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <HandshakeRoundedIcon sx={{ color: pink[500] }} fontSize="large"/>
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
          Leadership, Mentoring and Education
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <ComputerRoundedIcon sx={{ color: pink[500] }} fontSize="large"/>
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
          Photoshop, Illustrator, InDesign, Google Suite
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <BrushRoundedIcon sx={{ color: pink[500] }} fontSize="large"/>
          <Typography sx={{ mt: 4, mb: 2 }} padding={5} variant="h6">
            Design thinking, Graphic design, Illustration
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
