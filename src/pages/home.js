import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { SPOONACULAR_API_KEY } from '../API_KEYS';
import { useSearchParams } from 'react-router-dom';
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/Header";
import InstructionCard from "../components/InstructionCard";

function Home(){
    const [foodData, setFoodData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    const [food, setfood] = useState("pasta-and-seafood");
    const [searchParams] = useSearchParams();
    //change pasta eventually to a variable (buttons maybe..?)
    let foodCounter = 0;
    const URL2 = `https://nyc-restaurant-api.herokuapp.com/nyc-restaurants`


    

    useEffect(()=>{
        const foodToQuery = searchParams.get("food") || food;
        setfood(foodToQuery);
        
        axios
            .get(`https://api.spoonacular.com/recipes/complexSearch?query=${foodToQuery}&apiKey=${SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInformation=true`)
            .then((response)=>{
                setFoodData(response.data);
                //DELETE LATER
                console.log({response});
                if (foodToQuery === "mac-and-cheese"){
                    foodCounter = 1;
                }            
                console.log(foodToQuery);
                console.log(foodCounter);
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
    const { 
        recipeName, 
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
        recipeTime, 
        recipePrice, 
        recipeImage 
    } = useMemo(()=>{
        const foodMain = foodData.results && foodData.results[0] || {}
        const foodMain2 = foodMain.analyzedInstructions && foodMain.analyzedInstructions[0] || {}
        //steps[0] will be first set of directions
        const foodMain3 = foodMain2.steps && foodMain2.steps[0] || {}
        const foodMain4 = foodMain2.steps && foodMain2.steps[1] || {}
        const foodMain5 = foodMain2.steps && foodMain2.steps[2] || {}
        const foodMain6 = foodMain2.steps && foodMain2.steps[3] || {}
        const foodMain7 = foodMain2.steps && foodMain2.steps[4] || {}
        const foodMain8 = foodMain2.steps && foodMain2.steps[5] || {}
        const foodMain9 = foodMain2.steps && foodMain2.steps[6] || {}
        const foodMain10 = foodMain2.steps && foodMain2.steps[7] || {}
        const foodMain11 = foodMain2.steps && foodMain2.steps[8] || {}
        const foodMain12 = foodMain2.steps && foodMain2.steps[9] || {}

        return{
            recipeName:foodMain.title,
            recipeImage:foodMain.image,
            recipeInstructions1:foodMain3.step,
            recipeInstructions2:foodMain4.step,
            recipeInstructions3:foodMain5.step,
            recipeInstructions4:foodMain6.step,
            recipeInstructions5:foodMain7.step,
            recipeInstructions6:foodMain8.step,
            recipeInstructions7:foodMain9.step,
            recipeInstructions8:foodMain10.step,
            recipeInstructions9:foodMain11.step,
            recipeInstructions10:foodMain12.step,
            recipeTime: foodMain.readyInMinutes,
            recipePrice:Math.round(foodMain.pricePerServing)/100
        }
    }, [foodData])

    //used to display restaurant information
    const { restaurantDish, restaurantPricing, restaurantPlace, restaurantWeb } = useMemo(()=>{
        const restaurantMain = restaurantData && restaurantData[{foodCounter}] || {}
        return{
            restaurantDish: restaurantMain.name,
            restaurantPricing: restaurantMain.pricing,
            restaurantPlace: restaurantMain.restuarant,
            restaurantWeb: restaurantMain.web

        }
    }, [restaurantData])

    //restaurant address
    const { restaurantNumber, restaurantStreet, restaurantCity, restaurantState, restaurantZipCode } = useMemo(()=>{
        let restaurantMain2 = restaurantData && restaurantData[{foodCounter}] || {}
        let restaurantMain3 = restaurantMain2.address && restaurantMain2.address[{foodCounter}] || {}
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
        <div>
            <Header />
            <div className="generalCard">

                {/* <InstructionCard 
                recipeInstructions1 = {recipeInstructions1}
                recipeInstructions2 = {recipeInstructions2}
                recipeInstructions3 = {recipeInstructions3}
                recipeInstructions4 = {recipeInstructions4}
                recipeInstructions5 = {recipeInstructions5}
                recipeInstructions6 = {recipeInstructions6}
                recipeInstructions7 = {recipeInstructions7}
                recipeInstructions8 = {recipeInstructions8}
                recipeInstructions9 = {recipeInstructions9}
                recipeInstructions10 = {recipeInstructions10}
                /> */}

                <FoodCard
                recipeName = {recipeName}
                recipeImage = {recipeImage}
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
        </div>
    )

 }
export default Home;