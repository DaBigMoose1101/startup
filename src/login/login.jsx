import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';


export function Scores() {
    const navigate = useNavigate();
  return (
    <main>
            <div className="login">
        <h2>Login</h2>
        <form method="get" onSubmit={()=> navigate('/home')}>
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </main>
  );
}