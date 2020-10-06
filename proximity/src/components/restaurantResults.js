import React from "react";

import RestaurantProfile from "./restaurantProfile";

const RestaurantResults = ({ restaurants }) => (
    <ul className="list">
        {restaurants.map((restaurant, index) => (
            <RestaurantProfile key={index} {...restaurant} />
        ))}
    </ul>
);

export default RestaurantResults;
