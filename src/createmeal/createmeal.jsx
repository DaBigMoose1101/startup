import React from 'react';
import './create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function CreateMeal({addMeal, user}) {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState(null);
    const [location, setLocation] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');
  
    function createMeal(){
      const meal = {
        author: user,
        name: name,
        photo: photo,
        location: location,
        description: description,
        ingredients: ingredients
      }
      addMeal(meal);
      navigate('/meals');
    }

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
                      <div>
                        <img alt="imgplaceholder" src="./AddPhotoHere.jpg" />
                      </div>
                    
                      <div>
                        <label htmlFor="photo">Photo: </label>
                        <input id="photo" type="file" accept="img/*" onChange={(e) => setPhoto(e.target.value)}/>
                      </div>
                      <div>
                        <label htmlFor="name">Meal Name: </label>
                        <input id="name" type="text" placeholder="Enter Recipe Name" onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div>
                        <label htmlFor="pickup">Location: </label>
                        <input id="pickup" type="text" placeholder="Enter pickup Location" onChange={(e) => setLocation(e.target.value)}/>
                      </div>
                      <div>
                        <p>insert location on google maps here once functionality added</p>
                        <label htmlFor="ingredients">Ingredients: </label>
                        <textarea id="ingredients" name="ingredientlist" rows="6" cols="50" placeholder="List ingredients here"
                        onChange={(e) => setIngredients(e.target.value)}></textarea>
                      </div>
                      <div>
                        <button onClick={createMeal}>Post Meal</button>
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