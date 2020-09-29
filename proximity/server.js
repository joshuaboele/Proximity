require("dotenv").config();

const http = require("http");
const yelp = require("yelp-fusion");

const client = yelp.client(process.env.API_KEY);

const hostname = "127.0.0.1";
const port = 4000;

console.log("hey");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "");

    let data = "";

    client
        .search({
            term: "Pizza",
            location: "Rotterdam",
            limit: 10,
        })
        .then((response) => {
            data = JSON.stringify(response.jsonBody.businesses);
            res.end(data);
        })
        .catch((e) => {
            console.log(e);
            res.end("error");
        });
});

// REST
server.listen(port, hostname, () => {
    console.log("Server is running");
});
