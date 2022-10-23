import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import foodCard from '../components/foodCard';
import { SPOONACULAR_API_KEY } from '../API_KEYS';

function Home(){
    const [foodData, setFoodData] = useState([]);
    //change pasta eventually to a variable (buttons maybe..?)
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta-and-seafood&apiKey=${SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInformation=true`
    useEffect(()=>{
        axios
            .get(URL)
            .then((response)=>{
                setFoodData(response.data);
                //DELETE LATER
                console.log({response});
            })
            .catch((error)=>{
                console.warn("error", error);
                setFoodData([]);
            });
    }, []);

    const { recipeName, recipeInstructions, recipeTime } = useMemo(()=>{
        const foodMain = foodData.results && foodData.results[0] || {}
        const foodMain2 = foodMain.analyzedInstructions && foodMain.analyzedInstructions[0] || {}
        //steps[0] will be first set of directions
        const foodMain3 = foodMain2.steps && foodMain2.steps[0] || {}
        return{
            recipeName:foodMain.title,
            recipeInstructions:foodMain3.step,
            recipeTime: foodMain.readyInMinutes
               
        }
    }, [foodData])
    return (
        <div>
            <h1>Recipes for Food</h1>
            <h2>{recipeName}</h2>
            <p>{recipeInstructions}</p>
            <p>{recipeTime}</p>
            <p>{URL}</p>
        </div>
    )
 }
export default Home;