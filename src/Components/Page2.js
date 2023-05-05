
import React, { useState, useEffect } from "react";
import axios from "axios";


 function Page2() {
  const [search, setSearch] = useState("pune");
  const [CoinData, setCoinData] = useState({});
  const getData = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/search?query=btc=${search}`
      )
      .then(response => {
        setCoinData(response.data);
        //console.log(response)
      })
      
      
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
          placeholder="search"
        />

        <button onClick={getData}>Search</button>
      </div>

       <div>
        <h2>{CoinData.name} </h2>
       </div>
    </>
  );
}

export default Page2
// //https://api.coingecko.com/api/v3/search?query=btc