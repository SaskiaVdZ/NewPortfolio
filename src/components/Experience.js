import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


function Experience() {
  return (
  
    <Grid container
    justifyContent="space-evenly"
        >

      <Typography variant="h3" align="center">
        Experience
      </Typography>

      <Grid item direction= "column"
      xs={6}>
       
          <Typography variant="h6" align="center">
            Work
          </Typography>
          <Typography> Self-employed at FIK design courses</Typography>
          <Typography>2017 – now </Typography>
          <Typography>
            Preparatory interior architecture & design course online -link-
          </Typography>
          <Divider variant="middle" />

          <Typography>
            BOAB, Hällefors Bostads AB, Housing Association
          </Typography>
          <Typography>2019 – 2021 </Typography>
          <Typography>Chairman</Typography>
          <Divider variant="middle" />

          <Typography>Pihlskolan, Hällefors</Typography>
          <Typography>2019 – 2020</Typography>
          <Typography>
            Teacher SFI, Swedish for immigrants, Adult education
          </Typography>
          <Divider variant="middle" />

          <Typography>Pihlskolan, Hällefors</Typography>
          <Typography>2016 – 2019</Typography>
          <Typography>
            Teacher SVA, Swedish as a second language, Introduction program,
            High School education
          </Typography>
          <Divider variant="middle" />

          <Grid item>
            <Typography>Hällefors Folkhögskola</Typography>
            <Typography>2008 – 2015 </Typography>
            <Typography>
              Head teacher, Interior Architecture & Design
            </Typography>
            <Divider variant="middle" />
          </Grid>

          <Grid item>
            <Typography>Hällefors Folkhögskola</Typography>
            <Typography>2007 – 2008 </Typography>
            <Typography>Teacher, Form & Design</Typography>
          </Grid>

          <Grid item>
            <Typography>Hoganord Studios</Typography>
            <Typography>2004 – 2009 </Typography>
            <Typography>
              Co-owner and designer, Graphic design & Web design
            </Typography>
          </Grid>

          <Grid item>
            <Typography>KUUB design, Amsterdam</Typography>
            <Typography>2001 – 2003</Typography>
            <Typography>Co-owner and interior designer </Typography>
          </Grid>

          <Grid item>
            <Typography>De Architect, Dutch architecture magazine</Typography>
            <Typography>2001 – 2005</Typography>
            <Typography>Freelance writer</Typography>
          </Grid>
       
      </Grid>

      <Divider orientation="vertical" variant="middle" />

      <Grid item direction="column"
       xs={6}>
       
          <Typography variant="h6" align="center">Education</Typography>
          <Grid item>
            <Typography>Sundsgården folkhögskola</Typography>
            <Typography>2023 </Typography>
            <Typography>Tech for Women, Front end development, Certification</Typography>
          </Grid>

          <Grid item>
            <Typography>freeCodeCamp</Typography>
            <Typography>2023</Typography>
            <Typography>Responsive Webdesign Developer Certification300 hours</Typography>
          </Grid>

          <Grid item>
            <Typography>KBT Svealand AB Utbildningcenter för Kognitiv Beteendeterapi, Sweden</Typography>
            <Typography>2021</Typography>
            <Typography>Introduction Course CBT, Cognitive Behavioral Therapy, 50 hours, Certification</Typography>
          </Grid>

          <Grid item>
            <Typography>Gerrit Rietveld Academy, Amsterdam, Netherlands</Typography>
            <Typography>1997 – 2001</Typography>
            <Typography>Bachelor's degree in Interior Architecture & Spatial Design, 240 credits,  Cum Laude/With Honor</Typography>
          </Grid>

          <Grid item>
            <Typography>Royal Academy of Arts in The Hague, KABK, Netherlands</Typography>
            <Typography>1992 – 1996</Typography>
            <Typography>Bachelor's degree in Free Arts, 240 credits</Typography>
          </Grid>

          <Grid item>
            <Typography>Linköping University, Sweden</Typography>
            <Typography>2010</Typography>
            <Typography>Folkhögskolan's idea and pedagogy, 7.5 credits</Typography>
          </Grid>

          <Grid item>
            <Typography>Creative Coaching Association, USA</Typography>
            <Typography>2012</Typography>
            <Typography>Creative coaching training, 16 weeks, Certification</Typography>
          </Grid>
        
        
      </Grid>
    </Grid>
  


  
  );
}

export default Experience;
