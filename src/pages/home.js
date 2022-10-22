import React, { useEffect, useState } from "react";
import axios from "axios";
import foodCard from '../components/foodCard';
import { SPOONACULAR_API_KEY } from '../API_KEYS';

function Home(){
    const [foodData, setFoodData] = useState([]);
    //change pasta eventually to a variable (buttons maybe..?)
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInformation=true`
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

    return (
        <div>
            <h1>Recipes for Food</h1>
            <p>{URL}</p>
        </div>
    )
 }
export default Home;