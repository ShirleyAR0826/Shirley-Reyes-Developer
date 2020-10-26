import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import {projectList, skillsList} from './list';
import Header from './Header';


function App() {
  return ( 
  <div className="app">
    <div id="top">
      <Jumbotron id="hero">
        <Header/>
        <div className="container">
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Shirley Reyes</span>
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
                height="auto"
                width="300px"
                src="/shirley.jpg"
                alt="Shirley"
              />
            </Tilt>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                I am a Fullstack Web Developer. I have experience in creating Web Applications from Front-End, Server and Database. I am well-versed in the following technologies: HTML5, CSS3, CSS Grid, Boostrap4, JavaScript, Git/Github, NPM/NPM Scripts, React.js, Redux, Node.js, HTTP, JSON, AJAX, Express.js, RESTful API, SQL, PostgreSQL, MongoDB. 
              </p>
              <p className="about-wrapper__info-text">
                I am creative and passionate in what I do. I am driven by the desire to use my skills to solve real world problems. 
              </p>
              <p className="about-wrapper__info-text">
                My Top 5 Gallup Strenghts: Maximizer, Ideation, Learner, Achiever, Intellection.
              </p>
              <span className="d-flex mt-3">
                <a target="_blank" className="cta-btn cta-btn--resume" href="https://drive.google.com/file/d/1deWYMCeOmntV30jVsMHEYAweEjuG2Vb8/view?usp=sharing">
                  View Resume
                </a>
              </span>
            </div>
          </div>
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
            <img className="skills-icon" src={skill.skillImage} alt={skill.technology}/>
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
            className="cta-btn cta-btn--resume"
            href="mailto:shirley.apellido@gmail.com"
            >Inquire here</a>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container social-links">
        <SocialIcon url="https://github.com/ShirleyAR0826" className="Icon"/>
        <SocialIcon url="https://web.facebook.com/shirley.apellido" className="Icon" />
        <SocialIcon url="https://stackoverflow.com/users/13151983/shirleyar" className="Icon" />
      </div>
      <hr />
      <p className="footer__text">
        © 2020 - Shirley Reyes
      </p>
    </footer>
  </div>
  );
}

export default App;
