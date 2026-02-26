import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Tilt from 'react-tilt';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import { projectList, skillsList, strengthsList } from './list';
import Header from './Header';
import HeaderMobile from './HeaderMobile';

const getStrengthsPerSlide = () => {
  if (typeof window === 'undefined') {
    return 3;
  }

  if (window.innerWidth >= 1100) {
    return 3;
  }

  if (window.innerWidth >= 700) {
    return 2;
  }

  return 1;
};

function App() {
  const [strengthIndex, setStrengthIndex] = React.useState(0);
  const [strengthsPerSlide, setStrengthsPerSlide] = React.useState(getStrengthsPerSlide);

  const heroHighlights = [
    {
      title: '20+',
      description: 'Technologies used across production projects',
    },
    {
      title: 'Full Stack',
      description: 'React, Node.js, REST APIs, and database architecture',
    },
    {
      title: 'User First',
      description: 'Interfaces designed for clarity, speed, and accessibility',
    },
  ];

  const handleHighlightMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = (0.5 - (y / rect.height)) * 12;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`);
  };

  const resetHighlightCard = (event) => {
    const card = event.currentTarget;
    card.style.removeProperty('--rotate-x');
    card.style.removeProperty('--rotate-y');
    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
  };

  const handleStrengthSelect = (selectedIndex) => {
    setStrengthIndex(selectedIndex);
  };

  React.useEffect(() => {
    const onResize = () => {
      setStrengthsPerSlide(getStrengthsPerSlide());
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const groupedStrengths = React.useMemo(() => {
    const groups = [];

    for (let i = 0; i < strengthsList.length; i += strengthsPerSlide) {
      groups.push(strengthsList.slice(i, i + strengthsPerSlide));
    }

    return groups;
  }, [strengthsPerSlide]);

  React.useEffect(() => {
    setStrengthIndex((previousIndex) => (
      Math.min(previousIndex, Math.max(groupedStrengths.length - 1, 0))
    ));
  }, [groupedStrengths.length]);

  return ( 
  <div className="app">
    <div id="top" className="top">
      <Jumbotron 
        id="hero" 
        className="animated-background"
      >
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
        <div className="hero-grid" />
        <Header/>
        <HeaderMobile/>
        <div className="container">
          <div className="hero-content">
            {/* <p className="hero-eyebrow">FULL-STACK DEVELOPER</p> */}
            <h1 className="hero-title">
              Designing and building polished web products for real-world teams.
              <span className="hero-name text-color-main">I'm Shirley Reyes.</span>
            </h1>
            <p className="hero-description">
              Full-stack developer focused on scalable systems, reliable APIs,
              and engaging front-end experiences.
            </p>
            <div className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#projects">View Projects</a>
              <a className="cta-btn cta-btn--ghost" href="#contact">Let's Connect</a>
            </div>
            <div className="hero-highlights">
              {heroHighlights.map(({ title, description }) => (
                <div
                  key={title}
                  className="hero-highlight-card"
                  onMouseMove={handleHighlightMove}
                  onMouseLeave={resetHighlightCard}
                >
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>  

    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About me
        </h2>
        <div className="row about-wrapper">
          <div className="col-lg-5 col-md-6 col-sm-12 about-image-col">
            <Tilt className="about-wrapper__image" options={{ max : 10 }}>
              <img
                className="img-fluid rounded shadow-lg"
                src="/shirley.jpg"
                alt="Shirley"
              />
            </Tilt>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 about-text-col">
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
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-btn cta-btn--resume" 
                  href="https://drive.google.com/file/d/1IY_X--D0Prh2yjInTnvDsGGUeSgiLU2n/view?usp=sharing"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="strengths" style={{ '--strength-cards': strengthsPerSlide }}>
      <div className="container">
        <h2 className="section-title">
          Gallup CliftonStrengths©
        </h2>
        <Carousel
          className="strengths-carousel"
          activeIndex={strengthIndex}
          onSelect={handleStrengthSelect}
          indicators={false}
          prevLabel=""
          nextLabel=""
          prevIcon={<span aria-hidden="true" className="strengths-arrow strengths-arrow--prev">&#8249;</span>}
          nextIcon={<span aria-hidden="true" className="strengths-arrow strengths-arrow--next">&#8250;</span>}
          interval={5000}
          pause="hover"
          touch
        >
          {groupedStrengths.map((group, groupIndex) => (
            <Carousel.Item key={`group-${groupIndex}`}>
              <div className="strengths-slide">
                {group.map(({ strength, imageUrl }) => (
                  <div className="strengths-card" key={strength}>
                    <img className="strengths-icon" src={imageUrl} alt={strength} />
                    <h3 className="strengths-title">{strength}</h3>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="strengths-dots" role="tablist" aria-label="Strengths slides">
          {groupedStrengths.map((group, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              role="tab"
              className={`strengths-dot ${strengthIndex === index ? 'is-active' : ''}`}
              onClick={() => setStrengthIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${group.map((item) => item.strength).join(', ')}`}
              aria-selected={strengthIndex === index}
            />
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
