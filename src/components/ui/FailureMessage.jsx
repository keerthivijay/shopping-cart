import { useState } from "react";
import './FailureMessage.css'

function FailureMessage({message,submitStatus=true}) {

    const [open, setOpen] = useState(submitStatus);

    setTimeout(() => {
        setOpen(false);
    },3000);

    return(
        ((open) ?  (
        <div className="failure-message">
            <div>
                <h1>Failed</h1>
                <p>
                    {message}
                </p>
            </div>
            <span className="close-icon"><img src="../src/assets/close-white-no-bg.png" onClick={() => setOpen(false)} /></span>
        </div>
        ): '')
    );
}

export default FailureMessage;