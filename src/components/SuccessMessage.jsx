function SuccessMessage({message}) {

    return(

        <div className="success-message">
            <h1>Success</h1>
            <span className="close-icon">X</span>
            <p>
                {message}
            </p>
        </div>
    );
}

export default SuccessMessage;