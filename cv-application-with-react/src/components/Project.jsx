/* eslint-disable react/prop-types */
import './../styles/Project.css'

export function Project({ title, projectLink = null, linkName = 'Link', description }) {

    const anchor = projectLink ? <a href={projectLink} target='_blank'>{linkName}</a> : null

    return (
        <div className="project-container">
            <div className="project-name">{projectLink ? (<span>{title}, {anchor}</span>) : (<span>{title}</span>)}</div>
            <p className="project-description">{description}</p>
        </div>
    )
}