import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Name = ({ name }) => {
    return <li>Name: {name}</li>;
};

const Price = ({ price }) => {
    return <li>price: {price}</li>;
};

const Rating = ({ rating }) => {
    return <li>rating: {rating}</li>;
};

const RestaurantProfile = ({ name, price, rating }) => {
    return (
        <ul>
            <Name name={name} />
            <Price price={price} />
            <Rating rating={rating} />
        </ul>
    );
};

const RestaurantResults = ({ restaurants }) => (
    <div>
        {restaurants.map((restaurant, index) => (
            <RestaurantProfile key={index} {...restaurant} />
        ))}
    </div>
);

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

    return (
        <div>
            <RestaurantResults restaurants={restaurants} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
