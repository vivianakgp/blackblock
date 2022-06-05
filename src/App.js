import React, { useEffect, useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
//pages
import SuggestionPage from "./pages/suggestion/SuggestionPage";
import NewFeedback from "./pages/new-feedback/NewFeedback";
// file JSON
const Data = require("./data.json");

function App() {
  const [productRequests, setProductRequests] = useState([]);
  const setState = () => {
    if (JSON.parse(localStorage.getItem("productRequests")) === null) {
      setProductRequests(Data.productRequests);
    } else {
      setProductRequests(JSON.parse(localStorage.getItem("productRequests")));
    }
  };
  useEffect(() => {
    setState();
  }, []);
  // changeState as a prop in new feedback page
  const changeState = (newvalue) => {
    setProductRequests(newvalue);
  };
  console.log(productRequests);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<SuggestionPage productRequests={productRequests} />}
          />
          <Route
            path="/feedback"
            element={
              <NewFeedback
                productRequests={productRequests}
                changeState={changeState}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
