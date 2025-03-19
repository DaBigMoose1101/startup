import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';


export function Login() {
    const navigate = useNavigate({onAuthChange}); 
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleClick(){
        if(username !== "" && password !== ""){
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            onAuthChange(username, true);
            navigate("/home");
        }
    }
  return (
    <main>
        <div className="login">
            <h2>Login</h2>
            
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={handleClick} className="btn btn-primary">Login</button>
                </div>
        </div>
    </main>
  );
}