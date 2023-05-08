import React, { useEffect, useState } from "react";
import axios from 'axios';

const Page1 = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState([]);

  const getAllData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setFoundUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleFilter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = foundUsers.filter((coin) => {
        return coin.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false&local")
        .then((response) => {
          setFoundUsers(response.data);
        });
    }
    setName(keyword);
  };
  useEffect(() => {
    getAllData()
  })

  return (
    <>
      <input
        type="search"
        value={name}
        onChange={handleFilter}
        className="input"

        id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
      />
      <div className="user-list">
        {foundUsers.length > 0 ? (
          foundUsers.map((coin) => (
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-0 py-0 text-sm font-medium text-right whitespace-nowrap rounded-full h-3 w-2">
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
                {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <div className="relative w-full lg:max-w-sm">
                  {coin.vs_currency}
                </div>
              </td> */}
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <p style={{
                    color: coin.price_change_24h < 0 ? "red" : "green"
                  }}>
                    {coin.price_change_24h}
                  </p>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <div>
          </div >
        )}
      </div>

    </>
  );
}
export default Page1