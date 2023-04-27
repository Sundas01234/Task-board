import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const displayData = () => {
    return (
      data.map((coin) => {
        return (
    //       <table class="table-fixed">
    //       <div className="App" >
    //   <tbody>
    //     <tr  key={coin.id}>
    //       <th>{coin.name}</th>
    //       <th>{coin.price_change_24h}</th>
    //       <th>{coin.image}</th>
    //       <th>{coin.current_price}</th>
    //       <th>{coin.symbol}</th>
    //     </tr>
    //   </tbody>
    // </div>
    // </table>
    
  
        
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          symbol
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >image
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          price_change_24h
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {coin.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {coin.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                         {coin.symbol}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a className="text-green-300 hover:text-green-700" href="#">
                            {coin.image}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a className="text-red-500 hover:text-red-700" href="#">
                            {coin.price_change_24h}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
        }
      ))}


  return (
    <>
      <button class="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
       onClick={getAllData}>Coin data</button>
      <div>{displayData()}</div>
    </>
  );
}

export default App;
