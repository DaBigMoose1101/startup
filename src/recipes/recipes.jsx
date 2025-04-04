import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {Recipe} from '../recipeclass/recipe'
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Recipes({recipes}) {
    const navigate = useNavigate();
  return (
    <main>
     <div className="page_Specific_Menu">
        <div className="search-container">
          <form id="search" method="get" onSubmit={() => navigate('/search')}>
            <span>search</span>
            <input type="text" placeholder="search" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
            <span>
            <Button variant="primary" onClick={() => navigate('/createrecipe')}>
              Create Recipe
            </Button>
            </span>
        </div>
    <table>
      <thead>
      <tr>
        <th>Your Pages</th>
        <th>Recipes</th>
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
              <div>{recipes.map((recipe, index)=>(<Recipe recipe={recipe} key={index}></Recipe>))}</div> 
          
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