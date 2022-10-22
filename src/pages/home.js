import React, { useEffect, useState } from "react";
import axios from "axios";
import foodCard from '../components/foodCard';
import { SPOONACULAR_API_KEY } from '../API_KEYS';

function Home(){
    const [foodData, setFoodData] = useState([]);
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}`
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
        </div>
    )
 }
export default Home;