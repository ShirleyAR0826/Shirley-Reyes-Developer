import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return ( 
  <div className="app">
    <div id="top"></div>
    <Jumbotron id="hero" >
        <div className="container">
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Shirley Reyes</span>
              <br />
            I'm the Developer you need.
          </h1>
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
          </p>
        </div>
    </Jumbotron>

  <section id="about">
  <div className="container">
    <h2 className="section-title">
      About me
    </h2>
    <div className="row about-wrapper">
      <div className="col-md-6 col-sm-12">
        <div className="about-wrapper__image">
          <img
            className="img-fluid rounded shadow-lg"
            height="auto"
            width="300px"
            src="/shirley.jpg"
            alt="Profile Image"
          />
        </div>
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

  <section id="projects">
  <div className="container">
    <div className="project-wrapper">
      <h2 className="section-title dark-blue-text">
        Projects
      </h2>
      
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">ECommerce Web App</h3>
            <div>
              <p className="mb-5">
                I am really proud of this application. I was able to solve a problem regarding the accessibility of grocery delivery service at the time of quarantine. It has been a rewarding experience deploying this app and serving customers. The app was created with MERN Stack. It has contactless payment capabilities with the integration of paypal and other online payment channels. It is also integrated with AWS S3 and is secure with JWT and password encryption. I also implemented Facebook Messenger integration for better customer experience.
              </p>
            </div>
            <a target="_blank" className="cta-btn cta-btn--hero" href="https://www.sunnysideph.com/">
              See Live
            </a>
            <a target="_blank" className="cta-btn text-color-main" href="https://github.com/ShirleyAR0826/SunnySidePH">
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a href="https://www.sunnysideph.com/" target="_blank">
              <div data-tilt className="thumbnail rounded">
                <img className="img-fluid" src="/sunnysideph.jpg" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">Smart-Brain Web App</h3>
            <div>
              <p className="mb-4">
                Here's a face detection web application that I created using a machine learning API. It is built with React.js in the Front-End. It has a Node.js server and PostgreSQL database. It has user Registration and Signin functionalities.
              </p>
            </div>
            <a target="_blank" className="cta-btn cta-btn--hero" href="https://smart-brain-sar.herokuapp.com/">
              See Live
            </a>
            <a target="_blank" className="cta-btn text-color-main" href="https://github.com/ShirleyAR0826/smart-brain-app">
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a href="https://smart-brain-sar.herokuapp.com/" target="_blank">
              <div data-tilt className="thumbnail rounded">
                <img className="img-fluid" src="/SmartBrain_home.jpg" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">COVID19 Live Statistics</h3>
            <div>
              <p className="mb-4">
                I have created a COVID19 Live Statistics website that shows Global and Country summaries. It also has a search function to show country specific numbers. The site is updated real-time as it is integrated with an API.
              </p>
            </div>
            <a target="_blank" className="cta-btn cta-btn--hero" href="https://covid19-dashboard-72289.web.app/">
              See Live
            </a>
            <a target="_blank" className="cta-btn text-color-main" href="https://github.com/ShirleyAR0826/COVID19-Dashboard">
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a href="https://covid19-dashboard-72289.web.app/" target="_blank">
              <div data-tilt className="thumbnail rounded">
                <img className="img-fluid" src="/COVID19 -Dashboard.jpg" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">Robofriends App</h3>
            <div>
              <p className="mb-4">
                Here's a Social Media App I made where users can assign a robot to his/her profile. I has user search functionality. It is a responsive website and it is integrated to an API.
              </p>
            </div>
            <a target="_blank" className="cta-btn cta-btn--hero" href="https://shirleyar0826.github.io/RoboFriends">
              See Live
            </a>
            <a target="_blank" className="cta-btn text-color-main" href="https://github.com/ShirleyAR0826/RoboFriends">
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a href="https://shirleyar0826.github.io/RoboFriends" target="_blank">
              <div data-tilt className="thumbnail rounded">
                <img className="img-fluid" src="/Robofriends.jpg" />
              </div>
            </a>
          </div>
        </div>
      </div>

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

<footer className="footer navbar-static-bottom">
  <div className="container">
    <a href="#top" className="back-to-top">
      <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
    </a>
    <div className="social-links">
      <a href="https://web.facebook.com/shirley.apellido" target="_blank">
        <i className="fa fa-facebook-f fa-inverse"></i>
      </a>
      <a href="https://stackoverflow.com/users/13151983/shirleyar" target="_blank">
        <i className="fa fa-stack-overflow fa-inverse"></i>
      </a>
      <a href="https://github.com/ShirleyAR0826" target="_blank">
        <i className="fa fa-github fa-inverse"></i>
      </a>
    </div>
    <hr />
    <p className="footer__text">
      © 2020 - <a href="https://github.com/ShirleyAR0826" target="_blank">Shirley Reyes</a>
    </p>
  </div>
</footer>
  </div>
  );
}

export default App;
