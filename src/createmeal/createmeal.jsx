import React from 'react';
import './create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function CreateMeal() {
    const navigate = useNavigate();
  return (
    <main>
          <table>
            <thead>
            <tr>
              <th>Your Pages</th>
              <th>Create Meal</th>
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
              <td >


                    <form method="get" onSubmit={()=>navigate('/meals')}>
                      <div>
                        <img alt="imgplaceholder" src="./AddPhotoHere.jpg" />
                      </div>
                    
                      <div>
                        <label htmlFor="photo">Photo: </label>
                        <input id="photo" type="file" accept="img/*" />
                      </div>
                      <div>
                        <label htmlFor="name">Meal Name: </label>
                        <input id="name" type="text" placeholder="Enter Recipe Name"/>
                      </div>
                      <div>
                        <label htmlFor="pickup">Location: </label>
                        <input id="pickup" type="text" placeholder="Enter pickup Location"/>
                      </div>
                      <div>
                        <p>insert location on google maps here once functionality added</p>
                        <label htmlFor="ingredients">Ingredients: </label>
                        <textarea id="ingredients" name="ingredientlist" rows="6" cols="50" placeholder="List ingredients here"></textarea>
                      </div>
                      <div>
                        <button type="submit">Post Meal</button>
                      </div>

                    </form>
                
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