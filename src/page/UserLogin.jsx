import { useState } from "react";

function UserLogin() {

    const[login, setLogin] = useState({
            username:"",
            password:""
        });

        function handlelogin(e) {
            const {id, value} = e.target;

            setLogin((prev) => ({
                ...prev,
                [id] : value
            }))
        }

        const submit =(e) => {
            e.preventDefault();
        }

    return(
        <>
            <h1>User Login</h1>
            <div>
                <form className="form form-sign-in" action="#">
                    <label hrmlfor="username">User name:</label>
                    <input type="text" name="username" id="username" onChange={handlelogin} />

                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={handlelogin} />

                    <button className="btn btn-login" onClick={submit}>Login</button>
                </form>
            </div>
        </>
    );
}

export default UserLogin;