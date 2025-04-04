import React from 'react';
import './create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function CreateRecipe({addRecipe, user}) {
  const navigate = useNavigate();
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = React.useState('');
  const [ingredients, setIngredients] = React.useState([]);
  const [instructions, setInstructions] = React.useState('');
  function createRecipe(){
    const recipe = {
      author: user,
      photo: photo,
      name: name,
      ingredients:ingredients,
      instructions: instructions
    }
    addRecipe(recipe);
    navigate('/recipes')
  }
  return (
    <main>
          <table>
            <thead>
            <tr>
              <th>Your Pages</th>
              <th>Create recipe</th>
              <th>Recommended</th>
            </tr>
            </thead>
            <tbody>
            <tr >
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
                        <input id="photo" type="file" accept="img/*" onChange={(e) => setPhoto(e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="name">Recipe Name: </label>
                        <input id="name" type="text" placeholder="Enter Recipe Name" onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div>
                        <label htmlFor="ingredients">Ingredients: </label>
                        <textarea id="ingredients" name="ingredientlist" rows="6" cols="50" 
                        placeholder="List ingredients here"
                        onChange={(e) => setIngredients(e.target.value)} ></textarea>
                      </div>
                      <div>
                        <label htmlFor="instructions">Instructions: </label>
                        <textarea id="instructions" name="instructionlist" rows="6" cols="50" 
                        placeholder="List instructions here"
                        onChange={(e) => setInstructions(e.target.value)}></textarea>
                      </div>
                      <div>
                        <button onClick={createRecipe}>Create Recipe</button>
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