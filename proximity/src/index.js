import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const RestaurantProfile = ({ name, price, rating }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Price range: {price}</p>
            <span>Rating: {rating}</span>
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
