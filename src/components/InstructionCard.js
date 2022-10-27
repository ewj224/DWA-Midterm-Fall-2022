import React from "react";

function InstructionCard({
    recipeInstructions1,
    recipeInstructions2,
    recipeInstructions3,
    recipeInstructions4,
    recipeInstructions5,
    recipeInstructions6,
    recipeInstructions7,
    recipeInstructions8,
    recipeInstructions9,
    recipeInstructions10
}){
    return(
        <div>
            <p>{recipeInstructions1}</p>
            <p>{recipeInstructions2}</p>
            <p>{recipeInstructions3}</p>
            <p>{recipeInstructions4}</p>
            <p>{recipeInstructions5}</p>
            <p>{recipeInstructions6}</p>
            <p>{recipeInstructions7}</p>
            <p>{recipeInstructions8}</p>
            <p>{recipeInstructions9}</p>
            <p>{recipeInstructions10}</p>
        </div>
    )
}
export default InstructionCard;