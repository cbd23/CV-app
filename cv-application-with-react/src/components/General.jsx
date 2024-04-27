import './../styles/General.css'

export function General() {
    return (
        <div className='general-container'>
            <div className="general-upper">
                <h1 className="general-name">Catalin Badila</h1>
                <h3 className="general-position">Frontend Developer</h3>
            </div>
            <div className="general-lower">
                <div className="general-bio">
                Former copywriter with over 4 years of experience in the advertising industry. I&apos;m looking for opportunities to build successful projects, using my technical skills alongside everything I learned so far. Also actively working on extending my current stack by learning React, NodeJS, Express and MongoDB.
                </div>
                <div className="general-contact">
                    <div className="general-city">Bucharest</div>
                    <div className="general-phone">0123 456 789</div>
                    <div className="general-email">catalin@example.com</div>
                    <br />
                    <div className="general-github-link"><u>GitHub</u></div>
                    <div className="general-linkedin-link"><u>Linkedin</u></div>   
                </div>
            </div>
        </div>
    )
}