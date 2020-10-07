import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantResults from "./components/restaurantResults";
import Title from "./components/title";
import "./index.css";

var quizData = [
    {
        question: "Pizza or pasta?",
        option_a: "pasta",
        option_b: "pizza",
    },
    {
        question: "Soup or Curry?",
        option_a: "soup",
        option_b: "curry",
    },
    {
        question: "Soup or Curry?",
        option_a: "soup",
        option_b: "curry",
    },
];

const Questions = () => {
    const handleAnswer = (option) => {
        setAnswer([...answer, option]);
        setIndex(index + 1);
    };
    const [answer, setAnswer] = useState([]);
    const [index, setIndex] = useState(0);

    let question = quizData[index].question;
    let option_A = quizData[index].option_a;
    let option_B = quizData[index].option_b;

    return (
        <div>
            <Title title={question} />
            <button onClick={() => handleAnswer(option_A)}>{option_A}</button>
            <button onClick={() => handleAnswer(option_B)}>{option_B}</button>
            {console.log(answer)}
        </div>
    );
};

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/?term=sushi&location=rotterdam&limit=5")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            });
    }, []);

    return (
        <div>
            <div className="wrapper">
                <Questions />
                <RestaurantResults restaurants={restaurants} />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
