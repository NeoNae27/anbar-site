import "./UserJourney.scss"

export default function UserJourney({id, text}) {
    return(
        <span className="user-container">
            <span className="userId">
                <h2>{id}</h2>
            </span>
            <span className="stepText">
                <p className="body1">{text}</p>
            </span>
        </span>
    )
}