import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container contact-page">
          <div className="contact-section">
          <h3>Contact Information</h3>
            <p>main-email: <a href="mailto:techchick2023@gmail.com">techchick2023@gmail.com</a><br />
            alternative-email: <a href="mailto:huckabay90@gmail.com">huckabay90@gmail.com</a><br />
            GitHub:  <a href="https://github.com/meggers1990">GitHub</a><br />
            LinkedIn: <a href="https://linkedin.com/in/megan-huckabay">LinkedIn</a><br />
            Resume Link: <a href="https://docs.google.com/document/d/1d84juiC488FZ55L0Wioiz5BCJ5KyngAjabOw17EoqIc/edit?usp=sharing">Click for Resume</a></p>
          </div>
        </div>  
    )
}

export default Contact;