import React from "react";

import RestaurantProfile from "./restaurantProfile";

const RestaurantResults = ({ restaurants }) => (
    <ul className="list">
        {restaurants.map((restaurant) => (
            <RestaurantProfile key={restaurant.image_url} {...restaurant} />
        ))}
    </ul>
);

export default RestaurantResults;
