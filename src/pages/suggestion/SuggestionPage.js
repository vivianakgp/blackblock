import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// assets
import iconArrowDown from "../../assets/shared/icon-arrow-down.svg";
import iconArrowUp from "../../assets/shared/icon-arrow-up.svg";
import { ReactComponent as IconPlus } from "../../assets/shared/icon-plus.svg";
import { ReactComponent as IconArrowUp } from "../../assets/shared/icon-arrow-up.svg";
import { ReactComponent as IconComments } from "../../assets/shared/icon-comments.svg";
import { ReactComponent as IconSuggestions } from "../../assets/suggestions/icon-suggestions.svg";
//components
import Menu from "../../components/menu/Menu";

import "./suggestionPage.scss";

const SuggestionPage = ({ productRequests }) => {
  const navigate = useNavigate();
  // states
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const [sortType, setSortType] = useState("Most Upvotes");
  const [suggestionRequests, setSuggestionRequests] = useState([]);
  const [quantitySuggestion, setQuantitySuggestion] = useState(0);

  const filterStatus = () => {
    return productRequests.filter((request) => request.status === "suggestion");
  };
  const setState = () => {
    const newArraySuggestionStatus = filterStatus();
    setSuggestionRequests(newArraySuggestionStatus);
  };
  useEffect(() => {
    setState();
    setQuantitySuggestion(filterStatus().length);
  }, [productRequests]);

  //default order
  // suggestionRequests.sort((a, b) => {
  //   return b["upvotes"] - a["upvotes"];
  // });
  const filterByCategory = (category) => {
    // set to initial state with all suggestions request
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

  // "order" functions
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
      suggestionRequests.sort((a, b) => b.comments?.length - a.comments?.length)
    );
    setSortType(e.target.outerText);
    closeSelectBox();
  };
  const orderByLestComments = (e) => {
    setSuggestionRequests(
      suggestionRequests.sort((a, b) => a.comments?.length - b.comments?.length)
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
            <div className="qtySuggestions">
              <IconSuggestions style={{ marginRight: "5px" }} />
              {`${quantitySuggestion}  Suggestions`}
            </div>
            <div className="selectBox">
              {`Sort by: ${sortType}`}
              <img
                src={`${isSelectBoxOpen ? iconArrowUp : iconArrowDown}`}
                style={{ marginLeft: "5px" }}
                onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
                alt="iconUpDown"
              ></img>
              <ul className={`sortList ${isSelectBoxOpen ? "open" : "close"}`}>
                <li onClick={(e) => orderByMostUpvotes(e)}>Most Upvotes</li>
                <li onClick={(e) => orderByLeastUpvotes(e)}>Least Upvotes</li>
                <li onClick={(e) => orderByMostComments(e)}>Most Comments</li>
                <li onClick={(e) => orderByLestComments(e)}>Least Comments</li>
              </ul>
            </div>
          </div>
          <button className="btnAddFeedback" onClick={createNewFeedback}>
            <IconPlus style={{ marginRight: "5px" }} />
            Add Feedback
          </button>
        </div>
        <div className="requestList">
          {suggestionRequests.map((request) => (
            <div className="productRequest" key={request.id}>
              <h4>{request.title}</h4>
              <p>{request.description}</p>
              <span>{request.category}</span>
              <div>
                <span>
                  <IconArrowUp style={{ marginRight: "5px" }} />
                  {request.upvotes}
                </span>
                <span>
                  <IconComments style={{ marginRight: "5px" }} />
                  {request.comments?.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionPage;
