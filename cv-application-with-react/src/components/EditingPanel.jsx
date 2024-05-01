import './../styles/EditingPanel.css'
import { EditGeneral } from './EditGeneral'
import { EditProjects } from './EditProjects'

export function EditingPanel({ updateGeneralInfo, generalInfo }) {
    return (
        <div className='editing-panel'>
            <EditGeneral updateGeneralInfo={updateGeneralInfo} generalInfo={generalInfo}></EditGeneral>
            <EditProjects></EditProjects>
        </div>
    )
}