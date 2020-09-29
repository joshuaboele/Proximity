import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Name = ({ name }) => {
    return <span>Name: {name}</span>;
};

const Price = ({ price }) => {
    return <span>price: {price}</span>;
};

const Rating = ({ rating }) => {
    return <span>rating: {rating}</span>;
};

const RestaurantProfile = ({ name, price, rating }) => {
    return (
        <div>
            <Name name={name} />
            <Price price={price} />
            <Rating rating={rating} />
        </div>
    );
};

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            });
    }, []);

    console.log(restaurants);

    const restaurantList = restaurants.map((restaurant, index) => (
        <RestaurantProfile key={index} name={restaurant.name} price={restaurant.price} rating={restaurant.rating} />
    ));

    return <ul>{restaurantList}</ul>;
};

ReactDOM.render(<App />, document.getElementById("root"));
