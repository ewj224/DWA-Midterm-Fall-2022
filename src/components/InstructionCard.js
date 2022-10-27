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
    recipeInstructions10,
    recipeInstructions11,
    recipeInstructions12

}){
    return(
        <div className = "instructions">
            <div className="innerInstructions">
                <h3>Recipe Instructions</h3>
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
                <p>{recipeInstructions11}</p>
                <p>{recipeInstructions12}</p>
            </div>
        </div>
    )
}
export default InstructionCard;