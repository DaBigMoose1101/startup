import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Meal({meal, key}){

    return(
        <div className="post">
            <h5 className="username">{meal.name}</h5>
            <img alt="meal" src={meal.photo} />
            <p>Pick-up Location: {meal.location}</p>
            <p>Description: {meal.description}</p>
            <p>Ingredient list: {meal.ingredients}</p>
        </div>
    );
}