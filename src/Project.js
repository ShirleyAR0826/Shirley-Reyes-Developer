import React from 'react';
import Tilt from 'react-tilt';

function Project({ title, description, liveLink, sourceCode, screenShot }) {
  return (
    <article className="row project-card">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <p>{description}</p>
          <div className="project-actions">
            <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero cta-project" href={liveLink}>
              See Live
            </a>
            {sourceCode && (
              <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main cta-project cta-project--source" href={sourceCode}>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Tilt className="thumbnail rounded" options={{ max: 5 }}>
              <img className="img-fluid" alt={title} src={screenShot} />
            </Tilt>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
