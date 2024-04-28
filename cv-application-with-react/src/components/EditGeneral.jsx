import './../styles/EditGeneral.css'

export function EditGeneral() {
    return (
        <div className='edit-general-container'>
            <div className="full-name-container general-div">
                <div className="first-name-container">
                    <label htmlFor="firstName">First name*</label>
                    <input type="text" id='firstName' placeholder='Frank' required />
                </div>
                <div className="last-name-container">
                    <label htmlFor="lastName">Last name*</label>
                    <input type="text" id='lastName' placeholder='Martin' required />
                </div>
            </div>
            <div className="position-container general-div">
                <label htmlFor="position">Position*</label>
                <input type="text" id='position' placeholder='Frontend Developer' required />
            </div>
            <div className="city-container general-div">
                <label htmlFor="city">City*</label>
                <input type="text" id='city' placeholder='California' required />
            </div>
            <div className="phone-container general-div">
                <label htmlFor="phone">Phone*</label>
                <input type="tel" id='phone' placeholder='0123 456 789' required />
            </div>
            <div className="email-container general-div">
                <label htmlFor="email">Email*</label>
                <input type="email" id='email' placeholder='frank.martin@example.com' required />
            </div>
            <div className="github-link-container general-div">
                <label htmlFor="github">Github</label>
                <input type="text" id='github' placeholder='https://github.com/frankmartin23' />
            </div>
            <div className="linkedin-link-container general-div">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" id='linkedin' placeholder='https://www.linkedin.com/in/frank-martin/' />
            </div>
            <div className="bio-container general-div">
                <label htmlFor="bio">About*</label>
                <textarea rows='5' maxLength='320' id='bio' placeholder='Write an intro about yourself' />
            </div>
        </div>
    )
}