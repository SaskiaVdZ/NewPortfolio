import Obfuscate from 'react-obfuscate';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";
import Footer from './Footer';
import { Toolbar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";



function Contact() {
    return (
      <>
      <Toolbar>
        <Stack direction="row">
        <PhoneIcon /> 
      {' '} 
     <Obfuscate style={{textDecoration:"none", color: "red"}} 
       tel="073-8422905" />
       </Stack>


<Stack direction="row">
       
       <EmailIcon />
      {' '}
      <Obfuscate style={{textDecoration:"none", color: "red"}}
        email="saskiavanderzanden@gmail.com"
      /></Stack>

<Stack direction="row">
       <Link style={{textDecoration:"none", color: "red"}}  
          to='https://github.com/SaskiaVdZ'
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Github"
          ><i className="fa-brands fa-github"></i></Link> 
  
       <Link style={{textDecoration:"none", color: "red"}}
          to='https://www.linkedin.com/in/saskia-van-der-zanden-2b036b72/'
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn"
          ><i className="fa-brands fa-linkedin"></i></Link>
          </Stack>

      
       
   
      </Toolbar>
      
      <Stack direction="row">Made with<i className="fa-solid fa-heart"></i>in React and Material Design UI by Saskia van der Zanden
      </Stack>
     
    
   

          
          
    </>
    );
  }
  
  export default Contact;