import React, { useState } from 'react';
import Form from './contactForm.js';
import Resume from './Resume.js'

function ContactMe() {


  return (
    <div>
      <div id="contactContents">
        <Form />
        <Resume />
      </div>
    </div>
  );
}

export default ContactMe;
