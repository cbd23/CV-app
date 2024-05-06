import './../styles/EditEducation.css'

export function EditEducation({ updateEducationInfo, educationInfo }) {
    const handleInputChange = (e) => {
        const updatedInfo = { ...educationInfo, [e.target.id]: e.target.value}
        updateEducationInfo(updatedInfo)
    }

    const handleDateChange = (e) => {
        // The empty string on index 0 matches each month's numeric equivalent with their index 
        const months = [
            { id: '01', name: 'JAN' },
            { id: '02', name: 'FEB' },
            { id: '03', name: 'MAR' },
            { id: '04', name: 'APR' },
            { id: '05', name: 'MAY' },
            { id: '06', name: 'JUN' },
            { id: '07', name: 'JUL' },
            { id: '08', name: 'AUG' },
            { id: '09', name: 'SEPT'},
            { id: '10', name: 'OCT' },
            { id: '11', name: 'NOV' },
            { id: '12', name: 'DEC' },
        ]

        // This fn returns a month's name based on month's ID
        function getMonthName(monthId) {
            const month = months.find(value => value.id == monthId)
            return month.name
        }

        // We store the selected MONTH & YEAR based on the input[type='month] value
        const selectedMonth = e.target.value.slice(5)
        const selectedYear = e.target.value.slice(0, 4)

        // Display MONTH & YEAR in a string using the desired format
        const stringifiedDate = getMonthName(selectedMonth) + ' ' + selectedYear

        // Update the state variable with the selected date
        const updatedDate = { ...educationInfo, [e.target.id]: stringifiedDate }
        updateEducationInfo(updatedDate)
    }

    return (
        <div className='edit-education-container'>
            <h2>Education Info</h2>
            <div className="education-one-container">
                <h3>First education</h3>
                <div className="education-one-name education-div">
                    <label htmlFor="educationOneName">School</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationOneName' maxLength='30' placeholder='Informal School of IT' />
                </div>
                <div className="education-one-study-field education-div">
                    <label htmlFor="educationOneStudyField">Study field</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationOneStudyField' placeholder='Web Development with JavaScript' />
                </div>
                <div className="education-one-period education-div">
                    <div className="start-date">
                        <label htmlFor="educationOneStartDate">Start date</label>
                        <input onChange={(e) => handleDateChange(e)} type='month' id='educationOneStartDate' defaultValue='2023-10' />
                    </div>
                    <div className="end-date">
                        <label htmlFor="educationOneEndDate">End date</label>
                        <input onChange={(e) => handleDateChange(e)} type='month' id='educationOneEndDate' defaultValue='2024-02' />
                    </div>
                </div>
                <div className="education-one-place education-div">
                    <label htmlFor="educationOnePlace">Location</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationOnePlace' placeholder='BUCHAREST' />
                </div>
                <div className="education-one-description education-div">
                    <label htmlFor="educationOneDescription">Description</label>
                    <textarea onChange={(e) => handleInputChange(e)} id='educationOneDescription' maxLength='200' placeholder='Tell something about what you learned. Did you build a final project? ' />
                </div>
            </div>
            <div className="education-two-container">
                <h3>Second education</h3>
                <div className="education-two-name education-div">
                    <label htmlFor="educationOneName">School</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationTwoName' maxLength='30' placeholder='The Odin Project' />
                </div>
                <div className="education-two-study-field education-div">
                    <label htmlFor="educationTwoStudyField">Study field</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationTwoStudyField' placeholder='Full Stack Curriculum (JavaScript Path)' />
                </div>
                <div className="education-two-period education-div">
                    <div className="start-date">
                        <label htmlFor="educationTwoStartDate">Start date</label>
                        <input onChange={(e) => handleDateChange(e)} type='month' id='educationTwoStartDate' defaultValue='2023-01' />
                    </div>
                    <div className="end-date">
                        <label htmlFor="educationTwoEndDate">End date</label>
                        <input onChange={(e) => handleDateChange(e)} type='month' id='educationTwoEndDate' defaultValue='2024-06' />
                    </div>
                </div>
                <div className="education-two-place education-div">
                    <label htmlFor="educationTwoPlace">Location</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" id='educationTwoPlace' placeholder='ONLINE' />
                </div>
                <div className="education-two-description education-div">
                    <label htmlFor="educationTwoDescription">Description</label>
                    <textarea onChange={(e) => handleInputChange(e)} id='educationTwoDescription' maxLength='200' placeholder='Tell something about what you learned. Did you build a final project? ' />
                </div>
            </div>
        </div>
    )
}