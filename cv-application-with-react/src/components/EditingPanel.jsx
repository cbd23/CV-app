import './../styles/EditingPanel.css'
import { EditGeneral } from './EditGeneral'

export function EditingPanel({ updateGeneralInfo }) {
    return (
        <div className='editing-panel'>
            <EditGeneral updateGeneralInfo={updateGeneralInfo}></EditGeneral>
        </div>
    )
}