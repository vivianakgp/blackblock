import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// assets
import { ReactComponent as IconPlus } from "../../assets/shared/icon-plus.svg";
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";
//components
import Menu from "../../components/menu/Menu";

import "./suggestionPage.scss";

const SuggestionPage = ({ productRequests }) => {
  const navigate = useNavigate();
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const [sortType, setSortType] = useState("Most Upvotes");
  const [suggestionRequests, setSuggestionRequests] = useState([]);
  const filterStatus = () => {
    return productRequests.filter((request) => request.status === "suggestion");
  };
  const setState = () => {
    // const newArraySuggestionStatus = productRequests.filter(
    //   (request) => request.status === "suggestion"
    //);
    const newArraySuggestionStatus = filterStatus();
    setSuggestionRequests(newArraySuggestionStatus);
  };
  useEffect(() => {
    setState();
  }, [productRequests]);
  console.log(suggestionRequests); //agregar no found
  //default order
  // suggestionRequests.sort((a, b) => {
  //   return b["upvotes"] - a["upvotes"];
  // });
  const filterByCategory = (category) => {
    // setear al estado inicial
    const newArraySuggestionStatus = filterStatus();
    const newArrayByCategory = newArraySuggestionStatus.filter(
      (request) => request.category === category
    );
    setSuggestionRequests(newArrayByCategory);
  };
  // go to newFeedback page
  const createNewFeedback = () => {
    navigate("/feedback");
  };
  const closeSelectBox = () => {
    setIsSelectBoxOpen(false);
  };
  const orderByMostUpvotes = (e) => {
    setSuggestionRequests(
      suggestionRequests.sort((a, b) => b["upvotes"] - a["upvotes"])
    );
    setSortType(e.target.outerText);
    closeSelectBox();
  };
  const orderByLeastUpvotes = (e) => {
    setSuggestionRequests(
      suggestionRequests.sort((a, b) => a["upvotes"] - b["upvotes"])
    );
    setSortType(e.target.outerText);
    closeSelectBox();
  };
  const orderByMostComments = (e) => {
    setSuggestionRequests(
      suggestionRequests.sort((a, b) => b["comments"] - a["comments"])
    );
    setSortType(e.target.outerText);
    closeSelectBox();
  };
  const orderByLestComments = (e) => {
    setSuggestionRequests(
      suggestionRequests.sort((a, b) => a["comments"] - b["comments"])
    );
    setSortType(e.target.outerText);
    closeSelectBox();
  };
  return (
    <div className="SuggestionPage">
      <Menu filterByCategory={filterByCategory} setState={setState} />
      <div className="container">
        <div className="subMenu">
          <div>
            Sort by:
            <div className="selectBox">
              {sortType}
              <IconArrowDown
                onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
              />
              <ul className={`sortList ${isSelectBoxOpen ? "open" : "close"}`}>
                <li onClick={(e) => orderByMostUpvotes(e)}>Most Upvotes</li>
                <li onClick={(e) => orderByLeastUpvotes(e)}>Least Upvotes</li>
                <li onClick={(e) => orderByMostComments(e)}>Most Comments</li>
                <li onClick={(e) => orderByLestComments(e)}>Least Comments</li>
              </ul>
            </div>
          </div>
          <button className="btnAddFeedback" onClick={createNewFeedback}>
            <IconPlus />
            Add Feedback
          </button>
        </div>
        <div className="requestList">
          {suggestionRequests.map((request) => (
            <li key={request.id}>{request.title}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionPage;
