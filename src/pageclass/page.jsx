import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Page({page, key}){
    return(
        <div className="post">
            <h2 className="name">{page.name}</h2>
            <img alt="post" src={page.photo} />
            <p>{page.description}</p>
        </div>
    );
}