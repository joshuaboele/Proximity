import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Name = ({ name }) => {
    return <h2>Name: {name}</h2>;
};

const Address = ({ address1 }) => {
    console.log();
    return <span>Address: {address1}</span>;
};

const Price = ({ price }) => {
    return <p>Price: {price}</p>;
};

const Rating = ({ rating }) => {
    return <p>Rating: {rating}</p>;
};

const Image = ({ image }) => {
    return <img className="image" src={image}></img>;
};

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

const RestaurantResults = ({ restaurants }) => (
    <ul className="list">
        {restaurants.map((restaurant, index) => (
            <RestaurantProfile key={index} {...restaurant} />
        ))}
    </ul>
);

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/?term=pizza&location=rotterdam&limit=10")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRestaurants(data);
            });
    }, []);

    console.log(restaurants);

    return (
        <div>
            <h1>Proximity</h1>
            <div className="wrapper">
                <RestaurantResults restaurants={restaurants} />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
