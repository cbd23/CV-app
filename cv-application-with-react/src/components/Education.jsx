/* eslint-disable react/prop-types */
import './../styles/Education.css'

export function Education({ school, studyField, startDate, endDate, place, description }) {
    return (
        <div className="education">
            <div className="education-row-one">
                <span className="school-name">{school}</span>
                &nbsp;&#8212;&nbsp;
                <span className="study-field-name">{studyField}</span>
            </div>
            <div className="education-row-two">
                <span className="start-date">{startDate}</span>
                &nbsp;&#8211;&nbsp;
                <span className="end-date">{endDate}</span>
                &#44;&nbsp;
                <span className="place">{place}</span>
            </div>
            <div className="education-row-three">
            <p className="project-description">{description}</p>
            </div>
        </div>
    )
}