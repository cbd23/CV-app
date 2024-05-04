import './../styles/EditingPanel.css'
import { EditGeneral } from './EditGeneral'
import { EditProjects } from './EditProjects'
import { EditEducation } from './EditEducation'

export function EditingPanel({ updateGeneralInfo, generalInfo, updateProjectsInfo, projectsInfo, updateEducationInfo, educationInfo }) {
    return (
        <div className='editing-panel'>
            <EditGeneral updateGeneralInfo={updateGeneralInfo} generalInfo={generalInfo}></EditGeneral>
            <EditProjects updateProjectsInfo={updateProjectsInfo} projectsInfo={projectsInfo}></EditProjects>
            <EditEducation updateEducationInfo={updateEducationInfo} educationInfo={educationInfo}></EditEducation>
        </div>
    )
}