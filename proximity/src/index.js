const data = fetch("http://localhost:4000/")
    .then((response) => response.text())
    .then((data) => {
        JSON.parse(data).forEach((restaurant) => {
            console.log(restaurant);
        });
    });
