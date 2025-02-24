import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';


export function Scores() {
    const navigate = useNavigate();
  return (
    <main>
        <table>
          <tr>
            <th>Your Pages</th>
            <th>Feed</th>
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

                  <div class="post">
                      <img alt="post1" src="./PostPlaceHolder1.jpg"/>
                      <div class="postReact">
                        <button type="react" class="btn btn-primary btn-sm">Love It</button>
                        <button type="react" class="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p class="username">Creator's username here</p>
                      <p>Description of post here</p>
                      
                  </div>
              

                  <div class="post">
                      <img alt="post2" src="./PostPlaceHolder2.jpg"/>
                      <div class="postReact">
                        <button type="react" class="btn btn-primary btn-sm">Love It</button>
                        <button type="react" class="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p class="username">Creator's username here</p>
                      <p>Description of post here</p>
                  </div>
              
                  <div class="post">
                      <img alt="post3" src="./PostPlaceHolder3.jpg"/>
                      <div class="postReact">
                        <button type="react" class="btn btn-primary btn-sm">Love It</button>
                        <button type="react" class="btn btn-primary btn-sm">Comment</button>
                      </div>
                      <p class="username">Creator's username here</p>
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