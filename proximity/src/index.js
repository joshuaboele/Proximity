import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantResults from "./components/restaurantResults";
import "./index.css";

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/?term=sushi&location=kyoto&limit=3")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            });
    }, []);

    return (
        <div>
            <h1>Proximity</h1>
            <div className="wrapper">
                <RestaurantResults restaurants={restaurants} />
            </div>
            <button data-answer="sushi"></button>
            <button data-answer="pizza"></button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
