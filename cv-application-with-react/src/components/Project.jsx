/* eslint-disable react/prop-types */
import './../styles/Project.css'

export function Project({ projectsInfo, name, link, linkName = 'Live Demo', description }) {

    const anchor = link ? <a href={link} target='_blank'>{linkName}</a> : null

    return (
      <div className="project-container">
        {projectsInfo[name] !== "" && (
          <>
            <div className="project-name">
              {link ? (
                <span>
                  {projectsInfo[name]}, {anchor}
                </span>
              ) : (
                <span>{projectsInfo[name]}</span>
              )}
            </div>
            <p className="project-description">{description}</p>
          </>
        )}
      </div>
    );
}