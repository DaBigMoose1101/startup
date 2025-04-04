import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Recipe({recipe, key}){

    return(
        <div className="post">
            <h5 className="recipeName">{recipe.name}</h5>
            <p className="username">By: {recipe.author}</p>
            <img alt="recipe" src={recipe.photo ===""? null: recipe.photo} />
            <h6>Ingredients</h6>
            <p>{recipe.ingredients}</p>
            <h6>Instructions</h6>
            <p>{recipe.instructions}</p>
        </div>
    );
}