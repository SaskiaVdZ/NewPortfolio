import Obfuscate from 'react-obfuscate';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

function Contact() {
    return (
      <>
       <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
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
      <PhoneIcon /> 
      {' '} 
     <Obfuscate style={{textDecoration:"none", color: "red"}} 
       tel="073-8422905" />
      <EmailIcon />
      {' '}
      <Obfuscate style={{textDecoration:"none", color: "red"}}
        email="saskiavanderzanden@gmail.com"
      />
    
    Made with<i className="fa-solid fa-heart"></i>in React by Saskia van
          der Zanden
    </>
    );
  }
  
  export default Contact;