import React from "react";
import Page1 from "./Components/Page1"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
      <Header />
      <Routes>
        <Route exact path="/Page1" element={<Page1/>} />
        
       
      </Routes>
    </div>
  
  </BrowserRouter>
  );
}
export default App;
