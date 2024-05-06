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

  const [projectsInfo, setProjectsInfo] = useState({
    projectOneName: 'IMDb Clone App',
    projectOneLink: 'https://cbd23.github.io/watchlist-app/',
    projectOneDescription: 'My final project for graduating from the Web Development with JS course at the Informal School of IT. You can find the full description inside the README section of the GitHub repo.',

    projectTwoName: 'Weather App',
    projectTwoLink: 'https://cbd23.github.io/weather-app/',
    projectTwoDescription: 'This project helped me to better understand promises in JS. Using the Fetch API, I challenged myself to refactor the code until it counts less than 100 lines of JS code.',

    projectThreeName: 'ToDo List App',
    projectThreeLink: 'https://cbd23.github.io/todo-list/',
    projectThreeDescription: 'Gained more experience in bundling and optimizing web assets, using NPM and Webpack & learned new ways to deploy to GitHub Pages.'
  })

  const [educationInfo, setEducationInfo] = useState({
    educationOneName: 'Informal School of IT',
    educationOneStudyField: 'Web Development with JavaScript',
    educationOneStartDate: 'OCT 2023',
    educationOneIsFinished: true,
    educationOneEndDate: 'FEB 2024',
    educationOnePlace: 'BUCHAREST',
    educationOneDescription: '',

    educationTwoName: 'Informal School of IT',
    educationTwoStudyField: 'Web Development with JavaScript',
    educationTwoStartDate: '',
    educationTwoIsFinished: true,
    educationTwoEndDate: '',
    educationTwoPlace: '',
    educationTwoDescription: '',

    educationThreeName: 'Informal School of IT',
    educationThreeStudyField: 'Web Development with JavaScript',
    educationThreeStartDate: '',
    educationThreeIsFinished: true,
    educationThreeEndDate: '',
    educationThreePlace: '',
    educationThreeDescription: ''
  })

  // Create a fn that will be called by onChange event handlers to update 'generalInfo'
  const updateGeneralInfo = (updatedInfo) => {
    setGeneralInfo(updatedInfo)
  }

  // Same for updating 'projectsInfo'
  const updateProjectsInfo = (updatedInfo) => {
    setProjectsInfo(updatedInfo)
  }

  // Same for updating 'projectsInfo'
  const updateEducationInfo = (updatedInfo) => {
    setEducationInfo(updatedInfo)
  }

  return (
    <div className='app-container'>
      <EditingPanel updateGeneralInfo={updateGeneralInfo} generalInfo={generalInfo} updateProjectsInfo={updateProjectsInfo} projectsInfo={projectsInfo} updateEducationInfo={updateEducationInfo} educationInfo={educationInfo}></EditingPanel>
      <CV generalInfo={generalInfo} projectsInfo={projectsInfo} educationInfo={educationInfo}></CV>
    </div>
  )

}

export default App
