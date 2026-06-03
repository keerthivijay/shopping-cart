function FailureMessage({message}) {

    return(

        <div className="failure-message">
            <h1>Failed</h1>
            <span className="close-icon">X</span>
            <p>
                {message}
            </p>
        </div>
    );
}

export default FailureMessage;