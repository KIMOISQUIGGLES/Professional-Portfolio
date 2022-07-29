import React from 'react';
import Resume from '../img/Resume.PNG';
import '../../styles/Contact.css';
import '../../styles/bubblebutton/css/style.css';

export default function Contact() {
  return (
    <div id="Resume">
      <div>
        <a id="resumeDownload" href={Resume} download  className="bubbly-button">
          <img id="myResume" src={Resume} />
        </a>
      </div>
    </div>
  );
}
