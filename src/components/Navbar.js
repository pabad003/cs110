
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul>
                    <li><a href="#hero"><img src="/images/casa.png" alt="Home" /></a></li>
                    <li><a href="#about"><img src="/images/education.png" alt="About" /></a></li>
                    <li><a href="#education-skills"><img src="/images/premio2.png" alt="Education & Skills" /></a></li>
                    <li><a href="#experience-projects"><img src="/images/skills.png" alt="Experience & Projects" /></a></li>
                    <li><a href="#extracurriculars"><img src="/images/curriculars.png" alt="Extracurriculars" /></a></li>
                    <li><a href="#contact"><img src="/images/telefono.png" alt="Contact" /></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
