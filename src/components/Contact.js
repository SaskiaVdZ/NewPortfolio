import Obfuscate from 'react-obfuscate';


function Contact() {
    return (
      <>
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