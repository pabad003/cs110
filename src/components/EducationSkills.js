
import React from 'react';
import './EducationSkills.css';

const EducationSkills = () => {
    return (
        <section id="education-skills" className="education-skills-section">
            <h2>Education & Skills</h2>
            <div className="education">
                <h3>Academic History</h3>
                <div class="education-skills-container">
                <ul>
                    <strong>Major in Data Science (Sept 2021 - June 2025)</strong>
                    <p>University Carlos III Madrid</p>
                    <p></p>
                    <strong>Graduated from high school (Sept 2019 - June 2021)</strong>
                    <p>Loreto School, Kilkenny (Ireland)</p>
                    <strong>Major in Pianist (Sept 2010 - June 2021)</strong>
                    <p>Music School, Mérida(Spain)</p>
                    
                </ul>
                </div>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <div class="education-skills-container">
                <ul>
                    <strong>Programming Languages</strong>
                    <p></p>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <p></p>
                    <strong>Languages</strong>
                    <p></p>
                    <li>Spanish</li>
                    <li>English</li>
                    <li>French</li>
                </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationSkills;
