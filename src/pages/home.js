import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import foodCard from '../components/foodCard';
import { SPOONACULAR_API_KEY } from '../API_KEYS';

function Home(){
    const [foodData, setFoodData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    //change pasta eventually to a variable (buttons maybe..?)
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta-and-seafood&apiKey=${SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInformation=true`
    const URL2 = `https://nyc-restaurant-api.herokuapp.com/nyc-restaurants`

    useEffect(()=>{
        axios
            .get(URL)
            .then((response)=>{
                setFoodData(response.data);
                //DELETE LATER
                // console.log({response});
            })
            .catch((error)=>{
                console.warn("error", error);
                setFoodData([]);
            });
    }, []);

    useEffect(()=>{
        axios
            .get(URL2)
            .then((response2)=>{
                setRestaurantData(response2.data);
                //DELETE LATER
                console.log({response2});
            })
            .catch((error)=>{
                console.warn("error", error);
                setRestaurantData([]);
            });
    }, []);

    const { recipeName, recipeInstructions, recipeTime, recipePrice } = useMemo(()=>{
        const foodMain = foodData.results && foodData.results[0] || {}
        const foodMain2 = foodMain.analyzedInstructions && foodMain.analyzedInstructions[0] || {}
        //steps[0] will be first set of directions
        const foodMain3 = foodMain2.steps && foodMain2.steps[0] || {}
        return{
            recipeName:foodMain.title,
            recipeInstructions:foodMain3.step,
            recipeTime: foodMain.readyInMinutes,
            recipePrice:foodMain.pricing
               
        }
    }, [foodData])

    const { restaurantDish, restaurantPricing, restaurantPlace, restaurantWeb } = useMemo(()=>{
        const restaurantMain = restaurantData && restaurantData[0] || {}
        return{
            restaurantDish: restaurantMain.name,
            restaurantPricing: restaurantMain.pricing,
            restaurantPlace: restaurantMain.restuarant,
            restaurantWeb: restaurantMain.web

        }
    }, [restaurantData])

    const { restaurantNumber, restaurantStreet, restaurantCity, restaurantState, restaurantZipCode } = useMemo(()=>{
        const restaurantMain2 = restaurantData && restaurantData[0] || {}
        const restaurantMain3 = restaurantMain2.address && restaurantMain2.address[0] || {}
        return{
            restaurantNumber: restaurantMain3.number,
            restaurantStreet: restaurantMain3.street,
            restaurantCity: restaurantMain3.city,
            restaurantState: restaurantMain3.state,
            restaurantZipCode: restaurantMain3.zipCode
        }
    })

    const address = 
    restaurantNumber + " " 
    + restaurantStreet + ", "
    + restaurantCity + ", "
    + restaurantState + " "
    + restaurantZipCode;

    console.log({restaurantPlace})
    return (
        <div>
            <h1>Recipes for Food</h1>
            <h2>recipeName</h2>
            <p>recipeInstructions</p>
            <p>recipeTime</p>
            <p>recipeCost</p>
            {/* <h2>{recipeName}</h2>
            <p>{recipeInstructions}</p>
            <p>{recipeTime}</p> */}
            <p>{URL}</p>
            <br></br>
            <h1>Restaurant Alternatives</h1>
            <p>{URL2}</p>
            <p>{restaurantPlace}</p>
            <p>{restaurantDish}</p>
            <p>{restaurantPricing}</p>
            <p>{restaurantWeb}</p>
            <p>{address}</p>
        </div>
    )

 }
export default Home;