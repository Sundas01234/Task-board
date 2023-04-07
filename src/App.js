import React, { useEffect, useState } from "react";


const App = () => {
  
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
     
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  //console.log(data)
  return (
    <div className="App">
       {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}{user.symbol}</li>
          ))}
        </ul>
      )}
    
    </div>
  );
}

export default App;

