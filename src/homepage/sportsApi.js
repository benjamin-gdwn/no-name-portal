import { useState, useEffect } from "react";

const SportsApi = () => {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      ("https://v3.football.api-sports.io/fixtures/rounds?season=2019&league=61",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
        }
      })
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  if (err) {
    return 
    <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }

export default SportsApi;
