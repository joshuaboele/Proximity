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
        question: "Vraag 3?",
        option_a: "soup",
        option_b: "curry",
    },
];

const Questions = ({ index, setIndex, answer, setAnswer }) => {
    const endOfArray = quizData.length;
    console.log(index);
    console.log(endOfArray);

    const handleAnswer = (option) => {
        setAnswer([...answer, option]);
        if (index !== endOfArray) {
            setIndex(index + 1);
        } else {
            console.log("End of quiz");
        }
    };

    let question = quizData[index].question;
    let option_A = quizData[index].option_a;
    let option_B = quizData[index].option_b;

    return (
        <div>
            <Title title={question} />
            <button onClick={() => handleAnswer(option_A)}>{option_A}</button>
            <button onClick={() => handleAnswer(option_B)}>{option_B}</button>
        </div>
    );
};

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [index, setIndex] = useState(0);
    const isFinished = index === quizData.length;

    useEffect(() => {
        fetch("http://localhost:4000/?term=sushi,pizza&location=kyoto&limit=5")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            });
    }, []);

    return (
        <div>
            <div className="wrapper">
                {!isFinished && <Questions index={index} setIndex={setIndex} answer={answer} setAnswer={setAnswer} />}
                <ul className="list">
                    <RestaurantResults className="" restaurants={restaurants} />
                </ul>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
