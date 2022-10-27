import React from "react";

function FoodCard ({
    recipeName,
    recipeTime,
    recipePrice,
    recipeImage,
}){
    return (
        <div className = "foodCard">
            <div className="boxFoodCard">
                <h1>Recipe</h1>
                <h2 className="recipeName">Name: {recipeName}</h2>
                <img src={recipeImage} width="250"></img>
                <p className="recipeTime">Time: {recipeTime} minutes</p>
                <p>Cost: ${recipePrice}</p>
            </div>
        </div>
    )

}

export default FoodCard;