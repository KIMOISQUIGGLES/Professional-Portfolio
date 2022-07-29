import emailjs from "emailjs-com";
import React from 'react';
import '../../styles/Form.css';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_template', e.target, '4sNeubN968nGRtnOd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container test-mailing">

                <h2>Contact Me</h2>

                <form onSubmit={sendEmail}>
                    <div className="test-mailing-form">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" style={{width: '100%', height: 'px'}} name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" style={{width: '100%', height: 'px'}} name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" style={{width: '100%', height: 'px'}} name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" style={{width: '100%', height: 'px'}} name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info btn--submit bubbly-button"  id="submitButton" style={{width: '100%', height: 'px'}} value="Send Message"></input>
                        </div>
                    </div>
                </form>
                <a id="callMe" className="bubbly-button" href="tel:808-497-2223">Call Me</a>
            </div>
        </div>
    )
}