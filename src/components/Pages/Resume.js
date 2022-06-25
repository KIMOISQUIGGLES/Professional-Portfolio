import React from 'react';
import Resume from '../img/Resume.PNG';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div id="Resume">
      <h1  class="componentTitle">Resume</h1>
      <div>
        <a id="resumeDownload" href={Resume} download>
          <img id="myResume" src={Resume} />
        </a>
      </div>
    </div>
  );
}
