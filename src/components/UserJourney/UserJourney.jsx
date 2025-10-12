import "./UserJourney.scss"

export default function UserJourney({id, text}) {
    return(
        <span className="user__container">
            <span className="user__Id">
                <h2>{id}</h2>
            </span>
            <span className="user__stepText">
                <p className="body1">{text}</p>
            </span>
        </span>
    )
}