import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <ul>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#strengths">STRENGTHS</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#social">SOCIAL</a></li>
            </ul>
        </div>
    )
}

export default Header
