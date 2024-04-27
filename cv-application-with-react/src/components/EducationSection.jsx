import './../styles/EducationSection.css'
import { Education } from './Education'

export function EducationSection() {
    return (
        <div className='education-container'>
            <h4 className="education-title">EDUCATION</h4>
            <Education 
                school='Informal School of IT' 
                studyField='Web Development with JavaScript'
                startDate='FEB 2024'
                endDate='APR 2024'
                place='ONLINE'
                description='Discovered new galaxies in our Universe during this 4-months course.'>
            </Education>
            <Education 
                school='Informal School of IT' 
                studyField='Web Development with JavaScript'
                startDate='FEB 2024'
                endDate='APR 2024'
                place='ONLINE'
                description='Discovered new galaxies in our Universe during this 4-months course.'>
            </Education>
        </div>
    )
}