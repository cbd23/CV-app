import './../styles/ProjectsSection.css'
import { Project } from './Project'

export function ProjectsSection() {
    return (
        <div className='projects-container'>
            <h4 className="projects-title">PROJECTS</h4>
            <Project title='IMDb Clone App' projectLink='https://cbd23.github.io/watchlist-app/' linkName='Live Demo' description='My final project for graduating from the Web Development with JS course at the Informal School of IT. You can find the full description inside the README section of the GitHub repo.'></Project>
            <Project title='Weather App' projectLink='https://google.com' linkName='Click here' description='This project helped me to better understand promises in JS. Using the Fetch API, I challenged myself to refactor the code until it counts less than 100 lines of JS code.'></Project>
            <Project title='ToDo List App' projectLink='https://youtube.com' description='Gained more experience in bundling and optimizing web assets, using NPM and Webpack & learned new ways to deploy to GitHub Pages.'></Project>
        </div>
    )
}