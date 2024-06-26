import './../styles/EducationSection.css'
import { Education } from './Education'

export function EducationSection({ educationInfo }) {
    return (
        <div className='education-container'>
            <h4 className="education-title">EDUCATION</h4>
            <Education educationInfo={educationInfo}
                schoolName='educationOneName' 
                studyField={educationInfo.educationOneStudyField}
                startDate={educationInfo.educationOneStartDate}
                endDate={educationInfo.educationOneEndDate}
                place={educationInfo.educationOnePlace}
                description={educationInfo.educationOneDescription}>
            </Education>
            <Education educationInfo={educationInfo}
                schoolName='educationTwoName' 
                studyField={educationInfo.educationTwoStudyField}
                startDate={educationInfo.educationTwoStartDate}
                endDate={educationInfo.educationTwoEndDate}
                place={educationInfo.educationTwoPlace}
                description={educationInfo.educationTwoDescription}>
            </Education>
        </div>
    )
}