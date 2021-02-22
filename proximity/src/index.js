import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantResults from "./components/restaurantResults";
import Title from "./components/title";
import "./index.css";

var quizData = [
    {
        question: "Chinees of Japans?",
        option_a: "chinese",
        option_b: "japanese",
    },
    {
        question: "Mexicaans of Spaans?",
        option_a: "mexican",
        option_b: "spanish",
    },
    {
        question: "Frans of Engels?",
        option_a: "french",
        option_b: "english",
    },
];

const Questions = ({ setIsDone, answer, setAnswer }) => {
    const [index, setIndex] = useState(0);
    const endOfArray = quizData.length - 1;

    const handleAnswer = (option) => {
        setAnswer([...answer, option]);
        if (index !== endOfArray) {
            setIndex(index + 1);
        } else {
            setIsDone(true);
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
    const [isFinished, setIsFinished] = useState(false)
    const url = "http://localhost:4000/?location=rotterdam&categories=";
    const limit = "&limit=5";

    useEffect(() => {
        if(isFinished === true) { 

            let categories = answer.join(",");
            let parsedUrl = url + categories + limit;
            fetch(parsedUrl)
                .then((response) => response.json())
                .then((data) => {
                    setRestaurants(data);
                });       
            }  
        }, [isFinished]) 
       

    return (
        <div>
            <div className="wrapper">
                {!isFinished && <Questions setIsDone={setIsFinished} answer={answer} setAnswer={setAnswer} />}
                <ul className="list">
                    <RestaurantResults className="" restaurants={restaurants} />
                </ul>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
