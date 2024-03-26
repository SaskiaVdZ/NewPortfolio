import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Portrait from "./images/PortraitS.webp";
import MoreAbout from "./MoreAbout";
import Typewriter from "typewriter-effect";
import { Avatar } from "@mui/material";

function About() {
  return (
    <>
      <Grid container justify="center" overflow="hidden">
        <Grid item sx={{ mt: 5, mb: 6 }}>
            <Typewriter
              className="Type"
              options={{
                strings: [
                  "Hi! My name is Saskia",
                  "Welcome to my portfolio",
                  "here you can read about who I am",
                  "and see some of my projects",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <Stack direction="column" alignItems="flex-end">
              <Avatar
                alt="Saskia van der Zanden"
                src={Portrait}
                sx={{ width: 150, height: 150, mr: 7, mb: 3 }}
              />
            </Stack>
          <Typography variant="h4" textAlign="left" padding={5}>
                I am a curious junior front-end developer who just finished a
                full-time accelerated vocational course at Sundsgården
                folkhögskola: IT/Tech for women - Front end Development. I&#39;m
                currently learning React and studying Flutter at The App brewery
                and looking forward to dive into Data Visualisation D3.js at the
                New York University, shortly.
              </Typography>
        </Grid>
      </Grid>
      <MoreAbout />
    </>
  );
}

export default About;
