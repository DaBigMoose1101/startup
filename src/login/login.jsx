import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import LikeEventNotifier from '../postclass/likeNotifier';


export function Login({authorize}) {
    const navigate = useNavigate(); 
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("")
    const [image, setImage] = React.useState(null);

async function loginOrCreate(endpoint, method, userName, password) {
    const response = await fetch(endpoint, {
           method: method,
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
        const likeNotifier = new LikeEventNotifier(userName);
        authorize(true, userName, likeNotifier);
        navigate('/home');
    } else {
        setMessage(response.statusText);
    }
  }

    React.useEffect(()=>{
        fetch('https://foodish-api.com/api/')
        .then((response) => response.json())
        .then((data) => {
            setImage(data.image);
    })},[])

  return (
    <main>
        <div className="login">
            <h2>Login</h2>
            <p>{message}</p>
            
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div >
                    <button onClick={() =>{loginOrCreate('/api/auth/login', "PUT", username, password)}} className="btn btn-primary">Login</button>
                    <button onClick={() => {loginOrCreate('/api/auth/create', "POST", username, password)}} className="btn btn-primary">Register</button>
                </div>
                <div className="photo">
                    <img src={image}></img>
                </div>
        </div>
    </main>
  );
}