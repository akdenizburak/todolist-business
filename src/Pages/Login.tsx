import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    //User infos
    const user =
    {
        username: "burak",
        password: "1234"
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (username === user.username && password === user.password) {
            alert("you are log in")
            navigate("/dashboard");
        }
        else {
            if (username === user.username) {
                alert("wrong password")
            }
            else if (password === user.password) {
                alert("invalid username")
            }
            else {
                alert("Invalid username or wrong pass")
            }
        }
    };

    return (
        <form className='Login' onSubmit={handleSubmit}>
            <label>Login Screen</label>
            <input className='username' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input className='password' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit' onClick={handleSubmit}>Login</button>
    
        </form>
    )
};

export default Login;