import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Post({post, key}){

    return(
        <div className="post">
                      <img alt="post" src={post.photo} />
                      
                      <p className="username">{post.author}</p>
                      <p>{post.description}</p>
                  </div>
    );
}