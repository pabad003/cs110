// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Myself</h2>
            <div class="about-section-container">
                <p>I attended school in Mérida, a city in Spain, and completed my high school education in Kilkenny, Ireland. 
                    I pursued the Spanish baccalaureate in order to take the exam for admission to public universities in Spain. 
                    I spent my first two years at Carlos III University of Madrid and I'm currently participating in an abroad 
                    program completing my third year.           
                </p>
                <a href="https://github.com/pabad003/cs110/blob/main/PaulaCV.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/images/doc3.png" alt="Contact" /> 
                </a>
                </div>
        </section>
    );
};
export default AboutSection;
