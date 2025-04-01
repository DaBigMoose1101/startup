import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';


export function Login({authorize}) {
    const navigate = useNavigate(); 
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const[quote, setQuote] = React.useState("");
    const[author, setAuthor] = React.useState("");

    function handleLogin(){
        if(username !== "" && password !== ""){
            authorize('/api/auth/login', username, password);
            navigate("/home");
        }
    }
    function handleRegister(){
        if(username !== "" && password !== ""){
            authorize('/api/auth/create', username, password);
            navigate("/home");
        }
    }

    React.useEffect(()=>{
        setQuote("A recipe has no soul; you, as the cook, must bring soul to the recipe.");
        setAuthor("Thomas Keller");
    },[])

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
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                    <button onClick={handleRegister} className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p>Inspirational quote: {quote}</p>
                    <p>-{author}</p>
                </div>
        </div>
    </main>
  );
}