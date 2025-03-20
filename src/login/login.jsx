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

    function handleClick(){
        if(username !== "" && password !== ""){
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            authorize(username);
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
                    <button onClick={handleClick} className="btn btn-primary">Login</button>
                </div>
                <div>
                    <p>Inspirational quote: {quote}</p>
                    <p>-{author}</p>
                </div>
        </div>
    </main>
  );
}