import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {

  const [data, setData] = useState('');
  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
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
            <div className="data" key={data.id}>
              <h3>{data.name}</h3>
            </div>
          )
        }) : <h3>coins</h3>}

    </div>
  );
}

export default App;














