import './../styles/ProjectsSection.css'
import { Project } from './Project'

export function ProjectsSection({ projectsInfo }) {
    return (
        <div className='projects-container'>
            <h4 className="projects-title">PROJECTS</h4>
            <Project projectsInfo={projectsInfo} name='projectOneName' link={projectsInfo.projectOneLink} description={projectsInfo.projectOneDescription}></Project>
            <Project projectsInfo={projectsInfo} name='projectTwoName' link={projectsInfo.projectTwoLink} description={projectsInfo.projectTwoDescription}></Project>
            <Project projectsInfo={projectsInfo} name='projectThreeName' link={projectsInfo.projectThreeLink} description={projectsInfo.projectThreeDescription}></Project>
        </div>
    )
}