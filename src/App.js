import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
 
 const [data, setData] = useState('');
 
  
  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllData();
  }, []);

const displayData = () => {
    return data ? (
      data.map((data) => {
        return (
          <div className="data" key={data.id}>
            <h3>{data.vs_currency}</h3>
          </div>
        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }
return (
    <>
      {displayData()}
    </>
  );
}

export default App;


