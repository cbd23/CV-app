import './../styles/EditProjects.css'

export function EditProjects({ updateProjectsInfo, projectsInfo }) {
    const handleInputChange = (e) => {
        const updatedInfo = { ...projectsInfo, [e.target.id]: e.target.value}
        updateProjectsInfo(updatedInfo)
    }
    return (
        <div className='edit-projects-container'>
            <h2>Projects Info</h2>
            <div className="project-one-container">
                <h3>First project</h3>
                <div className="project-one-name projects-div">
                    <label htmlFor="projectOneName">Project name</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectOneName' maxLength='30' placeholder='IMDb Clone App' />
                </div>
                <div className="project-one-link projects-div">
                    <label htmlFor="projectOneLink">It&apos;s live? Add a link!</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectOneLink' placeholder='https://cbd23.github.io/watchlist-app/' />
                </div>
                <div className="project-one-description projects-div">
                    <label htmlFor="projectOneDescription">Description</label>
                    <textarea onChange={(e) => handleInputChange(e)} id='projectOneDescription' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
            <div className="project-two-container">
                <h3>Second project</h3>
                <div className="project-two-name projects-div">
                    <label htmlFor="p-two-name">Project name</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectTwoName' maxLength='30' placeholder='Weather App' />
                </div>
                <div className="project-two-link projects-div">
                    <label htmlFor="p-two-link">It&apos;s live? Add a link!</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectTwoLink' placeholder='https://cbd23.github.io/weather-app/' />
                </div>
                <div className="project-two-description projects-div">
                    <label htmlFor="p-two-description">Description</label>
                    <textarea onChange={(e) => handleInputChange(e)} id='projectTwoDescription' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
            <div className="project-three-container">
                <h3>Third project</h3>
                <div className="project-three-name projects-div">
                    <label htmlFor="p-three-name">Project name</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectThreeName' maxLength='30' placeholder='CV Builder App' />
                </div>
                <div className="project-three-link projects-div">
                    <label htmlFor="p-three-link">It&apos;s live? Add a link!</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='projectThreeLink' placeholder='https://cbd23.github.io/cv-app/' />
                </div>
                <div className="project-three-description projects-div">
                    <label htmlFor="p-three-description">Description</label>
                    <textarea onChange={(e) => handleInputChange(e)} id='projectThreeDescription' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
        </div>
    )
}