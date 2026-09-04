import { useState } from "react";
import './SuccessMessage.css'

function SuccessMessage({message, submitStatus=true}) {

    const [open, setOpen] = useState(submitStatus);

    setTimeout(() => {
        setOpen(false);
    },3000);

    return(
         ((open) ?  (
        <div className="success-message">
            <div>
                <h1>Success</h1>
                <p>
                    {message}
                </p>
            </div>                    
            <span className="close-icon"><img src="../src/assets/close-white-no-bg.png" onClick={() => setOpen(false)} /></span>
        </div>): '')
    );
}

export default SuccessMessage;