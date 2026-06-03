import { useState } from 'react';
import SuccessMessage from '../components/SuccessMessage';

function SignUp () {

    const [signup, setSignup] = useState({
        name:"",
        mobile: "",
        email: "",
        password: "",
        status:false
    });

    function handleSignup(e) {

        const {name, value} = e.target;

        setSignup((prev) => ({
                ...prev,
                [name]: value
            })
        );
    }
    let success = false;
    const submit = (e) => {
        e.preventDefault();
        setSignup((prev) => ({
            ...prev,
            "status":true
        }))
    };

    return(
        <>
            <h1>Sign-up</h1>
            {(signup.status)?<SuccessMessage message={"Successfully signed up!"} /> :''}
            <form className="form form-sign-up"  action="#">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={handleSignup} />

                <label htmlFor="mobile">Mobile No:</label>
                <input type="text" name="mobile" id="mobile" onChange={handleSignup} />

                <label htmlFor="email">E-mail Id:</label>
                <input type="text" name="email" id="email" onChange={handleSignup} />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={handleSignup} />

                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type="password" name="confirmpassword" id="confirmpassword" />

                <button className="btn btn-sign-up" onClick={submit}>Sign Up</button>
            </form>
        </>
    )
};

export default SignUp;