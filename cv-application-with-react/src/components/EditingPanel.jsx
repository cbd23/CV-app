import './../styles/EditingPanel.css'
import { EditGeneral } from './EditGeneral'
import { EditProjects } from './EditProjects'

export function EditingPanel({ updateGeneralInfo, generalInfo, updateProjectsInfo, projectsInfo }) {
    return (
        <div className='editing-panel'>
            <EditGeneral updateGeneralInfo={updateGeneralInfo} generalInfo={generalInfo}></EditGeneral>
            <EditProjects updateProjectsInfo={updateProjectsInfo} projectsInfo={projectsInfo}></EditProjects>
        </div>
    )
}