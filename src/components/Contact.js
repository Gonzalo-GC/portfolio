import React from 'react';
import data from '../data';


export default function Contact() {

    var email = data.email;
    var mailto = "mailto:";
    var mailtoEmail = mailto.concat(email);
    var social = data.social.map(s => {
        return <h2><a href={s.url} target={s.target} rel={s.rel}>{s.name}</a></h2>
    })

    return (
        <section id="contact">
            <div className="contact-content">
                <div className="contact-col-left">
                    <h2 className="contact-title">Contact me</h2>
                    <h1 className="contact-phrase">Have an idea or a concept that really excite you? Let's turn that idea into reality. Let me know it</h1>

                    <a href={mailtoEmail} className="contact-email">
                        <div className="contact-button">
                            Let's talk
                            </div>
                    </a>

                </div>
                <div className="contact-col-right">
                    <div className="contact-social">
                        <h1>Email</h1>
                        <h2>{email}</h2>
                        <br></br>
                        <h1>Social</h1>
                        {social}
                    </div>
                </div>
            </div>
        </section>
    );
}

