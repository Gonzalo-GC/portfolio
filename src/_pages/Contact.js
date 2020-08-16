import React from 'react';
import "../_styles/Contact.scss"
import { myInformation } from '../_config/myInformation';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

const Contact = () => (

    <section id="contact">        
        <div className="contact-container">
            <div id='stars1'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="row">
                <h2 className="contact-title">Contact me</h2>
                <div className="contact-col-left">                    
                    <h1 className="contact-phrase">Have an idea or a concept that really excite you? Let's turn that idea into reality. Let me know it</h1>
                    <a href={myInformation.EMAIL_URL} className="contact-email">
                        <div className="contact-button">
                            Let's talk
                        </div>
                    </a>
                </div>  

                <div className="contact-col-right">
                    <div className="social-media-contact">                        
                        <a href={myInformation.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-margin-row">
                            <div className="left-social">                                
                                <FaLinkedin>LinkedIn</FaLinkedin>                                
                            </div>
                            <div className="right-social">
                                <h4>LinkedIn</h4>
                            </div>
                        </a>
                        

                        <a href={myInformation.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-margin-row">
                            <div className="left-social">
                                <FaInstagram />
                            </div>
                            <div className="right-social">
                                <h4>Instagram</h4>
                            </div>
                        </a>

                        <a href={myInformation.EMAIL_URL} className="social-margin-row">
                            <div className="left-social">                            
                                <FaMailBulk />                            
                            </div>
                            <div className="right-social">
                                <h4>E-mail</h4>
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
);

export default Contact;

