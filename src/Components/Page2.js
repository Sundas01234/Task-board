import React, { useState, useEffect } from "react";
import axios from "axios";


 function Page2() {
  const [search, setSearch] = useState("pune");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/search?query=btc`
      )
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log("error", error);
      });
  };
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
      <div>
        <input
          className="form-control w-50"
          type="text"
          onBlur={e => setSearch(e.target.value)}
          placeholder="search Coin"
        />

        <button onClick={getData}>Search</button>
      </div>
    </>
  );
}

export default Page2
//https://api.coingecko.com/api/v3/search?query=btc