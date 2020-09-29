import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Name = ({ name }) => {
    return <h1>Hello, {name}</h1>;
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

    return <Name name="Joshua" />;
};

ReactDOM.render(<App />, document.getElementById("root"));
