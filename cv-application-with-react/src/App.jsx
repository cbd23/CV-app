import { useState } from 'react'
import './App.css'
import { EditingPanel } from './components/EditingPanel'
import { CV } from './components/CV'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: 'Cătălin',
    lastName: 'Bădilă',
    position: 'Frontend Developer',
    city: 'Bucharest',
    phone: '0123 456 789',
    email: 'catalin@example.com',
    github: 'https://github.com/cbd23',
    linkedin: 'https://www.linkedin.com/in/catalin-badila/',
    bio: `Former copywriter with over 4 years of experience in the advertising industry. I'm looking for opportunities to build successful projects, using my technical skills alongside everything I learned so far. Also actively working on extending my current stack by learning React, NodeJS, Express and MongoDB.`
  })

  // Create a fn that will be called by onChange event handlers to update 'generalInfo'
  const updateGeneralInfo = (updatedInfo) => {
    setGeneralInfo(updatedInfo)
  }

  return (
    <div className='app-container'>
      <EditingPanel updateGeneralInfo={updateGeneralInfo} generalInfo={generalInfo}></EditingPanel>
      <CV generalInfo={generalInfo}></CV>
    </div>
  )

}

export default App
