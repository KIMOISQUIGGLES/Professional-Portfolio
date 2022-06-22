import React from 'react';
import profile from '../img/tylerProfile.jpg';
import '../../styles/AboutMe.css';

export default function AboutMe() {
    
    return (
        <div id="aboutMeCard">
            <div id="cardContent">
                <div id="leftSide">
                    <h2>About Me</h2>
                    <img 
                        id="tylerFace"
                        src={profile}
                        alt="Tyler's Photo" />
                </div>
                <div id="rightSide">
                    <p class="aboutPar">
                        Front-end web developer integrating childcare and healthcare backgrounds to tap into the potential of communication between user and technology.
                    </p>  
                    <p class="aboutPar">
                        Receiving my certificate from the UW coding bootcamp, I have honed my skills in Javascript, CSS, HTML, and various other technologies.  I'm known amongst colleagues for sharp attention to detail and a passion for interesting user-friendly design, with a focus on Web and UI Design.
                    </p>
                    <p class="aboutPar">
                        With every project, my goal is to create a visually engaging experience for the user that also allows clients to express their personality through their products.  I love the creative process and am passionate about tying a client’s vision with their web-page.
                    </p>
                </div>
            </div>
        </div>
    );

}