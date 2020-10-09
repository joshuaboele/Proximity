import React from "react";

import RestaurantProfile from "./restaurantProfile";

const RestaurantResults = ({ restaurants }) => (
    <>
        {restaurants.map((restaurant) => (
            <RestaurantProfile key={restaurant.image_url} {...restaurant} />
        ))}
    </>
);

export default RestaurantResults;
