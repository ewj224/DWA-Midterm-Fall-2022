import React from "react";

function RestaurantCard ({
    restaurantPlace,
    restaurantDish,
    restaurantPricing,
    restaurantWeb,
    address
}){
    restaurantWeb = "https://" + restaurantWeb;
    return (
        <div className = "restaurantCard">
            <div className = "boxRestaurantCard">
                <h1>Restaurant</h1>
                <h2>Name: {restaurantDish}</h2>
                <p>Place: {restaurantPlace}</p>
                <p>Price: {restaurantPricing}</p>
                <p className="link">  
                    <a href={restaurantWeb} target="_blank" rel="noopener noreferrer"> Restaurant Link</a>
                </p>
                <p className="address">Address: {address}</p>
            </div>
        </div>
    )
    
}

export default RestaurantCard;