import './../styles/CV.css'
import { General } from './General'
import { ProjectsSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'

export function CV() {
    return (
        <div className='cv'>
            <General></General>
            <ProjectsSection></ProjectsSection>
            <EducationSection></EducationSection>
        </div>
    )
}