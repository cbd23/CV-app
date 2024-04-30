import './../styles/CV.css'
import { General } from './General'
import { ProjectsSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'

export function CV({generalInfo}) {
    return (
        <div className='cv'>
            <General generalInfo={generalInfo}></General>
            <ProjectsSection></ProjectsSection>
            <EducationSection></EducationSection>
        </div>
    )
}