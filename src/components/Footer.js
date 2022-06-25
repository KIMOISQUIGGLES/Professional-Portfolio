import React from 'react';
import '../styles/Footer.css';
import githubLogo from './img/GitHub-Mark-64px.png';
import linkedinLogo from './img/linkedinLogo.png';


function Footer() {
  return(
    <div id="footerBar">
      <a href="https://github.com/KIMOISQUIGGLES" target="_blank">
        <img  class="contactLink" src={githubLogo} />
      </a>
      <a href="https://www.linkedin.com/in/tylerjamesalcover/" target="_blank">
        <img  class="contactLink" src={linkedinLogo} />
      </a>

    </div>
  );
    
  }
  
  export default Footer;
  