import './../styles/EditGeneral.css'

export function EditGeneral({ updateGeneralInfo, generalInfo }) {
    const handleInputChange = (e) => {
        const updatedInfo = { ...generalInfo, [e.target.id]: e.target.value}
        updateGeneralInfo(updatedInfo)
    }
    return (
        <div className='edit-general-container'>
            <h2>General Info</h2>
            <div className="full-name-container general-div">
                <div className="first-name-container">
                    <label htmlFor="firstName">First name</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='firstName' maxLength='15' placeholder='Cătălin' />
                </div>
                <div className="last-name-container">
                    <label htmlFor="lastName">Last name</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='lastName' maxLength='15' placeholder='Bădilă' />
                </div>
            </div>
            <div className="position-container general-div">
                <label htmlFor="position">Position</label>
                <input onChange={(e) => handleInputChange(e)} type="text" id='position' maxLength='40' placeholder='Frontend Developer' />
            </div>
            <div className="city-container general-div">
                <label htmlFor="city">City</label>
                <input onChange={(e) => handleInputChange(e)} type="text" id='city' maxLength='20' placeholder='Bucharest' />
            </div>
            <div className="phone-container general-div">
                <label htmlFor="phone">Phone</label>
                <input onChange={(e) => handleInputChange(e)} type="tel" id='phone' maxLength='15' placeholder='0123 456 789' />
            </div>
            <div className="email-container general-div">
                <label htmlFor="email">Email</label>
                <input onChange={(e) => handleInputChange(e)} type="email" id='email' maxLength='30' placeholder='catalin@example.com' />
            </div>
            <div className="github-link-container general-div">
                <label htmlFor="github">Github</label>
                <input onChange={(e) => handleInputChange(e)} type="text" id='github' placeholder='https://github.com/cbd23' />
            </div>
            <div className="linkedin-link-container general-div">
                <label htmlFor="linkedin">Linkedin</label>
                <input onChange={(e) => handleInputChange(e)} type="text" id='linkedin' placeholder='https://www.linkedin.com/in/catalin-badila/' />
            </div>
            <div className="bio-container general-div">
                <label htmlFor="bio">About</label>
                <textarea onChange={(e) => handleInputChange(e)} rows='5' maxLength='320' id='bio' placeholder='Write an intro about yourself' />
            </div>
        </div>
    )
}