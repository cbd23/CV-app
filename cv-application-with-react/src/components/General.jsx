import './../styles/General.css'

export function General({ generalInfo }) {
    return (
        <div className='general-container'>
            <div className="general-upper">
                <h1 className="general-name">{generalInfo.firstName} {generalInfo.lastName}</h1>
                <h3 className="general-position">{generalInfo.position}</h3>
            </div>
            <div className="general-lower">
                <div className="general-bio">
                {generalInfo.bio}
                </div>
                <div className="general-contact">
                    <div className="general-city">{generalInfo.city}</div>
                    <div className="general-phone">{generalInfo.phone}</div>
                    <div className="general-email">{generalInfo.email}</div>
                    <br />
                    {generalInfo.github !== '' && <div className="general-github-link"><u><a href={generalInfo.github} target='_blank'>Github</a></u></div>}
                    {generalInfo.linkedin !== '' && <div className="general-linkedin-link"><u><a href={generalInfo.linkedin} target='_blank'>Linkedin</a></u></div>}   
                </div>
            </div>
        </div>
    )
}