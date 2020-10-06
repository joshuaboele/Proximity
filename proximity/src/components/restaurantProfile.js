import React from "react";

// import components

import Address from "./address.js";
import Image from "./image";
import Name from "./name";
import Price from "./price";
import Rating from "./rating";

const RestaurantProfile = ({ name, price, rating, image_url, location }) => {
    return (
        <li className="list__item">
            <Image image={image_url} />
            <Name name={name} />
            <Address {...location} />
            <Price price={price} />
            <Rating rating={rating} />
        </li>
    );
};

export default RestaurantProfile;
