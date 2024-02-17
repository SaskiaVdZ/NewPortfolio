import Obfuscate from 'react-obfuscate';
import AccordionProjects from './Accordion';


function Contact() {
    return (
      <>
    <AccordionProjects />
    <p>
      Phone: <Obfuscate tel="073-8422905" />
      <br />
      Email:{' '}
      <Obfuscate
        email="saskiavanderzanden@gmail.com"
        headers={{
          subject: 'react-obfuscate',
          body: 'Down with the machines!',
        }}
      />
    </p>
    </>
    );
  }
  
  export default Contact;