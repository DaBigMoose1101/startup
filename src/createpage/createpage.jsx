import React from 'react';
import './create.css'
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
              <th>Create Page</th>
              <th>Recommended</th>
            </tr>
            <tr style="vertical-align: top;">
              <td style="vertical-align: top;" id="side">
            
                <div>Page A</div>
                <div>Page B</div>
                <div>Page C</div>
                <div>Page D</div>
  
              </td>
              <td >
                <form method="post" onSubmit={()=>navigate('/pages')}>
                    <div>
                      <img alt="imgplaceholder" src="./AddPhotoHere.jpg" />
                    </div>                    
                    <div>
                      <label for="photo">Photo: </label>
                      <input id="photo" type="file" accept="img/*" />
                    </div>
                    <div>
                      <label for="name">Page Name: </label>
                      <input id="name" type="text" placeholder="Enter Page Name" />
                    </div>
                    <div>
                      <label for="description">Page Description: </label>
                      <textarea id="description" name="pagedescription" rows="6" cols="50" placeholder="Description"></textarea>
                    </div>
                    <div>
                      <button type="submit">Create Page</button>
                    </div>
                </form>                
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