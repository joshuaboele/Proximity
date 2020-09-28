import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    console.log(
        fetch("localhost:4000/")
            .then((response) => response.json())
            .then((data) => console.log(data))
    );
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
