import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
//pages
import SuggestionPage from "./pages/suggestion/SuggestionPage";
import NewFeedback from "./pages/new-feedback/NewFeedback";

function App() {
  useEffect(() => {
    setDataInLocalStorage();
  }, []);
  const setDataInLocalStorage = () => {
    const data = require("./data.json");
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SuggestionPage />} />
          <Route path="/feedback" element={<NewFeedback />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
