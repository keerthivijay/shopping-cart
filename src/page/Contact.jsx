import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import SuccessMessage from "../components/SuccessMessage";

function Contact() {

    const [submitStatus,setSubmitStatus] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setSubmitStatus(true);
    }

    return (
        <>
            <div className="contact">
                <h1>Contact Us</h1>
                <p>Please feel free to reach out to us with any questions or feedback.</p>
                {submitStatus? <SuccessMessage message="Message sent successfully!" />:''}
                <form className="form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                    
                    <label htmlFor="name">E-mail:</label>
                    <input type="text" name="email" id="email" />
                    
                    <label htmlFor="name">Mobile No:</label>
                    <input type="text" name="mobile" id="mobile" />
                    
                    <label htmlFor="name">Message:</label>
                    <textarea name="message" id="message" column="" rows="5">
                    </textarea>
                    <button className="btn" onClick={submit}>Submit</button>
                    </form>
            </div>
        </>
    );
}

export default Contact;