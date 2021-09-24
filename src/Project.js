import React from 'react';
import Tilt from 'react-tilt';

function Project({title, description, liveLink, sourceCode, screenShot}) {
    return (
    <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title}</h3>
            <div>
              <p className="mb-3">{description}</p>
            </div>
            <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero cta-project" href={liveLink}>
              See Live
            </a>
            <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main cta-project" href={sourceCode}>
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Tilt className="thumbnail rounded" options={{ max : 5 }} >
                <img className="img-fluid" alt={title} src={screenShot} />
              </Tilt>
            </a>
          </div>
        </div>
    </div>
    )
}

export default Project;
