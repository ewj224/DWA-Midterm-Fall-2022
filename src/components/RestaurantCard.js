import React from "react";

function RestaurantCard ({
    restaurantPlace,
    restaurantDish,
    restaurantPricing,
    restaurantWeb,
    address
}){
    return (
        <div className = "restaurantCard">
            <div className = "boxRestaurantCard">
                <h1>Restaurant</h1>
                <h2>Name: {restaurantDish}</h2>
                <p>Place: {restaurantPlace}</p>
                <p>Price: {restaurantPricing}</p>
                {/* <p>{restaurantWeb}</p> */}
                <p>Address: {address}</p>
            </div>
        </div>
    )

}

export default RestaurantCard;