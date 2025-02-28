import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';





export function post(){

    return(
        <div className="post">
                      <img alt="post" src="./PostPlaceHolder1.jpg"/>
                      <div className="postReact">
                        <Button type="react" className="btn btn-primary btn-sm">Love It</Button>
                        <Button type="react" className="btn btn-primary btn-sm">Comment</Button>
                      </div>
                      <p className="username">Creator's username here</p>
                      <p>Description of post here</p>
                      
                  </div>
    );
}