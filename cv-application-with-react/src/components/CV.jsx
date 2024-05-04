import './../styles/CV.css'
import { General } from './General'
import { ProjectsSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'

export function CV({ generalInfo, projectsInfo, educationInfo }) {
    return (
        <div className='cv'>
            <General generalInfo={generalInfo}></General>
            <ProjectsSection projectsInfo={projectsInfo}></ProjectsSection>
            <EducationSection educationInfo={educationInfo}></EducationSection>
        </div>
    )
}