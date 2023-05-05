import React, { useEffect, useState } from "react";
import axios from 'axios';

const Page1 = () => {
  const [data, setData] = useState([]);
  
  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false&local")
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
                      Logo
                    </th>
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
                    >current_Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                     vs_currency
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      price_change_24h
                    </th>
                  </tr>
                </thead>

                {
                  data.map((coin) => {
                    return (

                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-0 py-0 text-sm font-medium text-right whitespace-nowrap rounded-full h-2 w-2">
                            <img src={coin.image} alt={coin.public_id}>
                            </img>
                          </td>
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
                            <div className="relative w-full lg:max-w-sm">
                              {coin.current_price}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <div className="relative w-full lg:max-w-sm">
                              {coin.vs_currency}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <p style={{
                              color: coin.price_change_24h < 0 ? "red" : "green"
                            }}>
                              {coin.price_change_24h}
                            </p>
                          </td>
                        </tr>
                      </tbody>


                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <button class="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
        onClick={getAllData}>Coin data</button>
      <div>{displayData()}</div>
    </>
  );
}
export default 
setCoinData(response.data)