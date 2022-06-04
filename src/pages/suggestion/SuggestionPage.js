import React from "react";
import { useNavigate } from "react-router-dom";
// assets
import { ReactComponent as IconPlus } from "../../assets/shared/icon-plus.svg";
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";

//components
import Menu from "../../components/menu/Menu";
import ProductRequest from "../../components/product-request/ProductRequest";

import "./suggestionPage.scss";

const SuggestionPage = () => {
  const navigate = useNavigate();
  const createNewFeedback = () => {
    navigate("/feedback");
  };
  return (
    <div className="SuggestionPage">
      <Menu />
      <div className="container">
        <div className="subMenu">
          <div>
            Sort by:
            <div className="selectBox">
              Most upvotes <IconArrowDown />
            </div>
          </div>
          <button className="btnAddFeedback" onClick={createNewFeedback}>
            <IconPlus />
            Add Feedback
          </button>
        </div>
        <ProductRequest />
      </div>
    </div>
  );
};

export default SuggestionPage;
