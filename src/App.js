import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  
 const [data, setData] = useState('');
 const HandleClick = () => {
  console.log(data)
 }
  
  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
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

  return (
    <div className="App">
      
      {data ?
        data.map(data => {
          return (
            <button onClick={HandleClick() }>coin</button>
          )
        }) : <form>
          <div></div>
        </form>}

    </div>
  );
      
}


export default App;


