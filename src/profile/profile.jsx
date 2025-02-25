import React from 'react';
import './profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function Profile() {
    const navigate = useNavigate();
  return (
    <main>
          <table>
            <tr>
              <th>Your Pages</th>
              <th>Profile</th>
              <th>Recommended</th>
            </tr>
            <tr>
              <td style="vertical-align: top;" id="side">
              
                <div>Page A</div>
                <div>Page B</div>
                <div>Page C</div>
                <div>Page D</div>
  
              </td>
              <td style="vertical-align: top;" id="feed">
                <div className="profile">
                  <img alt="profileplaceholder" src="./ProfilePlaceholder.png" />
                  <h3 id="UserName">UserName</h3>
                  <p id="UserBio">User bio here</p>
                </div>
                    <div className="post">
                        <img alt="post1" src="./PostPlaceHolder1.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p>Creator's username here</p>
                        <p>Description of post here</p>
                        
                    </div>
                
  
                    <div className="post">
                        <img alt="post2" src="./PostPlaceHolder2.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p>Creator's username here</p>
                        <p>Description of post here</p>
                    </div>
                
                    <div className="post">
                        <img alt="post3" src="./PostPlaceHolder3.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p>Creator's username here</p>
                        <p>Description of post here</p>
                    </div>
                
                </td>
                <td style="vertical-align: top;" id="side">
  
                      <div>Meal A</div>
                      <div>Meal B</div>
                      <div>Meal C</div>
                      <div>Meal D</div>
  
                    </td>
            </tr>
            
          </table>         
        </main>
  );
}