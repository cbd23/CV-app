import { useState } from 'react'
import './App.css'
import { EditingPanel } from './components/EditingPanel'
import { CV } from './components/CV'


function App() {

  return (
    <div className='app-container'>
      <EditingPanel></EditingPanel>
      <CV></CV>
    </div>
  )

}

export default App
