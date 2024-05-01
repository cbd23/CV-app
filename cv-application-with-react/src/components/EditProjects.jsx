import './../styles/EditProjects.css'

export function EditProjects() {
    return (
        <div className='edit-projects-container'>
            <h2>Projects Info</h2>
            <div className="project-one-container">
                <h3>First project</h3>
                <div className="project-one-name projects-div">
                    <label htmlFor="p-one-name">Project name</label>
                    <input type="text" id='p-one-name' maxLength='30' placeholder='IMDb Clone App' />
                </div>
                <div className="project-one-link projects-div">
                    <label htmlFor="p-one-link">It&apos;s live? Add a link!</label>
                    <input type="text" id='p-one-link' placeholder='https://cbd23.github.io/watchlist-app/' />
                </div>
                <div className="project-one-description projects-div">
                    <label htmlFor="p-one-description">Description</label>
                    <textarea type="text" id='p-one-description' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
            <div className="project-one-container">
                <h3>Second project</h3>
                <div className="project-one-name projects-div">
                    <label htmlFor="p-one-name">Project name</label>
                    <input type="text" id='p-one-name' maxLength='30' placeholder='Weather App' />
                </div>
                <div className="project-one-link projects-div">
                    <label htmlFor="p-one-link">It&apos;s live? Add a link!</label>
                    <input type="text" id='p-one-link' placeholder='https://cbd23.github.io/weather-app/' />
                </div>
                <div className="project-one-description projects-div">
                    <label htmlFor="p-one-description">Description</label>
                    <textarea type="text" id='p-one-description' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
            <div className="project-one-container">
                <h3>Third project</h3>
                <div className="project-one-name projects-div">
                    <label htmlFor="p-one-name">Project name</label>
                    <input type="text" id='p-one-name' maxLength='30' placeholder='CV Builder App' />
                </div>
                <div className="project-one-link projects-div">
                    <label htmlFor="p-one-link">It&apos;s live? Add a link!</label>
                    <input type="text" id='p-one-link' placeholder='https://cbd23.github.io/cv-app/' />
                </div>
                <div className="project-one-description projects-div">
                    <label htmlFor="p-one-description">Description</label>
                    <textarea type="text" id='p-one-description' maxLength='200' placeholder='Say a few words about this project' />
                </div>
            </div>
        </div>
    )
}