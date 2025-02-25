import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';


export function Home() {
    const navigate = useNavigate();
  return (
    <main>
        <table>
          <thead>
          <tr>
            <th>Your Pages</th>
            <th>Feed</th>
            <th>Recommended</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td id="side">
            
              <div>Page A</div>
              <div>Page B</div>
              <div>Page C</div>
              <div>Page D</div>

            </td>
            <td id="feed">

                  <div className="post">
                      <img alt="post1" src="./PostPlaceHolder1.jpg"/>
                      <div className="postReact">
                        <button type="react" className="btn btn-primary btn-sm">Love It</button>
                        <button type="react" className="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p className="username">Creator's username here</p>
                      <p>Description of post here</p>
                      
                  </div>
              

                  <div className="post">
                      <img alt="post2" src="./PostPlaceHolder2.jpg"/>
                      <div className="postReact">
                        <button type="react" className="btn btn-primary btn-sm">Love It</button>
                        <button type="react" className="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p className="username">Creator's username here</p>
                      <p>Description of post here</p>
                  </div>
              
                  <div className="post">
                      <img alt="post3" src="./PostPlaceHolder3.jpg"/>
                      <div className="postReact">
                        <button type="react" className="btn btn-primary btn-sm">Love It</button>
                        <button type="react" className="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p className="username">Creator's username here</p>
                      <p>Description of post here</p>
                  </div>
              
              </td>
              <td id="side">

                    <div>Meal A</div>
                    <div>Meal B</div>
                    <div>Meal C</div>
                    <div>Meal D</div>

                  </td>
          </tr>
          </tbody>
        </table>
      </main>
  );
}