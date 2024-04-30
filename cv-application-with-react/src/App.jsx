import { useState } from 'react'
import './App.css'
import { EditingPanel } from './components/EditingPanel'
import { CV } from './components/CV'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: 'Frank',
    lastName: 'Martin',
    position: 'Frontend Dev',
    city: 'California',
  })

  // Create a fn that will be called by onChange event handlers to update 'generalInfo'
  const updateGeneralInfo = (updatedInfo) => {
    setGeneralInfo(updatedInfo)
  }

  return (
    <div className='app-container'>
      <EditingPanel updateGeneralInfo={updateGeneralInfo}></EditingPanel>
      <CV generalInfo={generalInfo}></CV>
    </div>
  )

}

export default App
