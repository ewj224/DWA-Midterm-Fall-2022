import React from "react";

function RestaurantCard ({
    restaurantPlace,
    restaurantDish,
    restaurantPricing,
    restaurantWeb,
    address
}){console.log({restaurantWeb})
    restaurantWeb = "https://" + restaurantWeb;
    return (
        <div className = "restaurantCard">
            <div className = "boxRestaurantCard">
                <h1>Restaurant</h1>
                <h2>Name: {restaurantDish}</h2>
                <p>Place: {restaurantPlace}</p>
                <p>Price: {restaurantPricing}</p>
                <p className="link">  
                    <a href={restaurantWeb}>Link</a>
                </p>
                <p>Address: {address}</p>
            </div>
        </div>
    )
    
}

export default RestaurantCard;