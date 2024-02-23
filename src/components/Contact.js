import Obfuscate from "react-obfuscate";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function ContactFooter() {
  return (
    <>
      <Stack alignItems="center" spacing={{xs:'1', sm:'3'}} mt={5} mb={5}>
        <Typography textAlign="center">
          Made with <i className="fa-solid fa-heart"></i> in React and Material
          Design UI by Saskia van der Zanden
        </Typography>
        <Stack direction={{xs:'column', sm:'row'}} alignItems="center">
          <Typography textAlign="left" sx={{ mx: 1 }}>
            <PhoneIcon fontSize="small" style={{verticalAlign:"middle"}} />{" "}
            <Obfuscate
              style={{ textDecoration: "none", color: "red" }}
              tel="073-8422905"
            />
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography textAlign="left" sx={{ mx: 1 }}>
            <EmailIcon fontSize="small" style={{verticalAlign:"middle"}} />{" "}
            <Obfuscate
              style={{ textDecoration: "none", color: "red" }}
              email="saskiavanderzanden@gmail.com"
            />
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography variant="h6" textAlign="left"sx={{ mx: 1 }} >
            <Link
              style={{ textDecoration: "none", color: "red" }}
              to="https://github.com/SaskiaVdZ"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Github"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </Typography>
          <Typography variant="h6" textAlign="left" sx={{ mx: 1 }} >
            <Link
              style={{ textDecoration: "none", color: "red" }}
              to="https://www.linkedin.com/in/saskia-van-der-zanden-2b036b72/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default ContactFooter;
