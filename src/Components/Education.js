import React from 'react';
import "../Styles/Education.css";

const Education = () => {
    return (
        <div className="education-container education-page">
            <h1>Education</h1>
            <div className="school-section">
                {/* <img src="certificate-image.jpg" alt="Certificate Image" /> */}
                <h2><strong>Full-stack Software Development Program</strong></h2>
                <p><b>February 2023 - October 2023</b></p>
                <p>
                    <b>Graduated with proficiency in front-end and back-end development,
                    including technologies such as HTML, CSS, JavaScript, and
                    database management.</b>
                </p>
                <h2><strong>GCA (General Coding Assessment)</strong></h2>
                <p><b>Score: 706</b></p>
            </div>

            <div className="skills-container">
                <div className="frontend-section">
                    <strong>Front-End Development:</strong>
                    <ul>
                        <b>HTML5 <br/ >
                        CSS (Cascading Style Sheets)<br/ >
                        JavaScript<br/ >
                        User Interface Design<br/ >
                        npm (Node Package Manager)<br/ >
                        Version Control/Github<br/ >
                        Jest (for React.js)<br/ >
                        Testing Library (e.g., React Testing Library)<br/ >
                        Fetch API<br/ >
                        Async/Await<br/ >
                        Web Accessibility (WCAG)<br/ ></b>
                    </ul>
                </div>
                <div className="backend-section">
                    <strong>Back-End Web Development:</strong>
                    <ul>
                        <b>Node.js<br />
                        Express.js<br />
                        SQL (Database Management)<br />
                        RESTful API Design<br />
                        Authentication and Authorization<br />
                        Middleware (Express.js)<br />
                        GraphQL<br />
                        WebSockets (Real-time Communication)<br />
                        Testing (e.g., Jest)<br />
                        CI/CD (Continuous Integration/Continuous Deployment)</b>
                    </ul>
                </div>
            </div>

            <div className="skills2-container">
                <div className="tech-section">
                    <strong>Libraries and Technologies:</strong><br />
                    <ul>
                        <b>JavaScript Libraries<br />
                        Axios<br />
                        Redux.js<br />
                        Heroku<br />
                        JSON<br />
                        TypeScript<br />
                        Microsoft Visual Studio Code<br />
                        React.js<br />
                        Express.js<br />
                        Webpack<br /></b>
                    </ul>
                </div>
                <div className="other-section">
                    <strong>Other Skills:</strong><br />
                    <ul>
                        <b>REST APIs<br />
                        Programming<br />
                        Debugging<br />
                        Software<br />
                        Query Writing<br />
                        Problem Solving<br />
                        Markup Languages<br />
                        Network Security<br />
                        User Experience (UX)<br />
                        User Authentication<br /></b>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Education;

