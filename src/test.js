const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aab247b97cmsh9c72b6f56135ab4p147af2jsn525053e830c0",
    "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
  },
};

fetch(
  "https://amazon23.p.rapidapi.com/product-details?asin=B08H8VZ6PV&country=US",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.result[0].title))
  .catch((err) => console.error(err));
