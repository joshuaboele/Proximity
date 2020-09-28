require("dotenv").config();

const http = require("http");
const yelp = require("yelp-fusion");

const client = yelp.client(process.env.API_KEY);

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    let data = "";
    client
        .search({
            term: "Coffee",
            location: "Rotterdam",
        })
        .then((response) => {
            data = JSON.stringify(response.jsonBody.businesses[0].name);
            res.end(data);
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
});

// REST
server.listen(port, hostname, () => {
    console.log("Server is running");
});
