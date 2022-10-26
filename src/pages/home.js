import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { SPOONACULAR_API_KEY } from '../API_KEYS';
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";

function Home(){
    const [foodData, setFoodData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    //change pasta eventually to a variable (buttons maybe..?)
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=blueberry-pancake&apiKey=${SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInformation=true`
    const URL2 = `https://nyc-restaurant-api.herokuapp.com/nyc-restaurants`

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

    //recipe display information
    const { recipeName, recipeInstructions, recipeTime, recipePrice, recipeImage } = useMemo(()=>{
        const foodMain = foodData.results && foodData.results[0] || {}
        const foodMain2 = foodMain.analyzedInstructions && foodMain.analyzedInstructions[0] || {}
        //steps[0] will be first set of directions
        const foodMain3 = foodMain2.steps && foodMain2.steps[0] || {}
        return{
            recipeName:foodMain.title,
            recipeImage:foodMain.image,
            recipeInstructions:foodMain3.step,
            recipeTime: foodMain.readyInMinutes,
            recipePrice:Math.round(foodMain.pricePerServing)/100
        }
    }, [foodData])

    //used to display restaurant information
    const { restaurantDish, restaurantPricing, restaurantPlace, restaurantWeb } = useMemo(()=>{
        const restaurantMain = restaurantData && restaurantData[0] || {}
        return{
            restaurantDish: restaurantMain.name,
            restaurantPricing: restaurantMain.pricing,
            restaurantPlace: restaurantMain.restuarant,
            restaurantWeb: restaurantMain.web

        }
    }, [restaurantData])

    //restaurant address
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

    return (
        <div className="generalCard">
            <FoodCard
            recipeName = {recipeName}
            recipeImage = {recipeImage}
            // recipeInstructions = {recipeInstructions}
            recipeTime = {recipeTime}
            recipePrice = {recipePrice}
            />

            <RestaurantCard
            restaurantDish = {restaurantDish}
            restaurantPricing = {restaurantPricing}
            restaurantPlace = {restaurantPlace}
            restaurantWeb = {restaurantWeb}
            address = {address}
            />
        </div>
    )

 }
export default Home;