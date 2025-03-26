import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import { projectList, skillsList, strengthsList } from './list';
import Header from './Header';
import cover3 from './cover3.jpg';
import HeaderMobile from './HeaderMobile';


function App() {
  return ( 
  <div className="app">
    <div id="top" className="top">
      <Jumbotron id="hero" style={{backgroundImage: `url(${cover3})`}}>
        <Header/>
        <HeaderMobile/>
        <div className="container">
          <h1 className="hero-title">
            Hi, my name is&#160;
            <span className="text-color-main"> Shirley Reyes.</span>
              <br />
            I'm a Fullstack Developer.
          </h1>
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
          </p>
        </div>
      </Jumbotron>
    </div>  

    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About me
        </h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Tilt className="about-wrapper__image" options={{ max : 10 }}>
              <img
                className="img-fluid rounded shadow-lg"
                src="/shirley.jpg"
                alt="Shirley"
              />
            </Tilt>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
              I am a Full-Stack Web Developer with a 
              proven track record of building end-to end 
              web applications—from intuitive
              front-end interfaces to robust serverside
              logic and database
              management.
              </p>
              <p className="about-wrapper__info-text">
              Passionate about solving real-world
              problems through clean, scalable
              code and user-centered design, I bring
              both technical expertise and a
              problem-solving mindset to every
              project.
              </p>
              <span className="d-flex mt-3">
                <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--resume" href="https://drive.google.com/file/d/1LibA26JxPQ7pDrQxVRewesmleX2SJZE_/view?usp=drive_link">
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="strengths">
      <div className="container">
        <h2 className="section-title">
          Gallup CliftonStrengths©
        </h2>
        <div className="skills">
          {strengthsList.map(({strength, imageUrl}) => (
            <div className="skill-item">
              <h6 className="skill-title">{strength}</h6>
              <img className="strengths-icon" src={imageUrl} alt={strength}/>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="skills">
      <div className="container">
        <h2 className="section-title">
            Skills
        </h2>
        <div className="skills">
          {skillsList.map(skill=>(
            <div className="skill-item">
              <h6 className="skill-title">{skill.technology}</h6>
              <img className="skills-icon" src={skill.skillImage} alt={skill.technology}/>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title">
            Projects
          </h2>
          {projectList.map(project=>(
            <Project
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              sourceCode={project.sourceCode}
              screenShot={project.screenShot}
            />
          ))}
          
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Contact
        </h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            Got questions? Feel free to drop me an email
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href="mailto:shirley.apellido@gmail.com"
            >Inquire here</a>
        </div>
      </div>
    </section>

    <footer className="footer" id="social">
      <div>
      <div className="container social-links">
        <SocialIcon url="https://github.com/ShirleyAR0826" className="Icon"/>
        {/* <SocialIcon url="https://web.facebook.com/shirley.apellido" className="Icon" /> */}
        <SocialIcon url="https://stackoverflow.com/users/13151983/shirleyar" className="Icon" />
        <SocialIcon url="https://www.linkedin.com/in/shirleyapellido" className="Icon" />
        {/* <SocialIcon url="https://twitter.com/ShirleyAR0826" className="Icon" /> */}
      </div>
      <p className="footer__text">
        © 2020 - Shirley Reyes
      </p>
      </div>
      <div className="back-to-top-container">
        <a href="#top" className="back-to-top">
          <img src="/chevron-up-icon.png" alt="up-arrow" />
          <span>Back to top</span>
        </a>
      </div>
    </footer>
  </div>
  );
}

export default App;
