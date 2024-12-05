// import PropTypes from "prop-types";

function MiniCard( props ) {

    return (
        <div className="card text-left space-y-2">
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
            <button className="create-playlist bordered-button"> { props.buttonText } </button>
        </div>
    )
}

export default MiniCard;