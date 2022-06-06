import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//  assets
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import { ReactComponent as IconPlus } from "../../assets/shared/icon-plus.svg";
import { ReactComponent as IconArrowLeft } from "../../assets/shared/icon-arrow-left.svg";

import "./newFeedback.scss";

const NewFeedback = ({ productRequests, changeState }) => {
  const navigate = useNavigate();

  // states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("feature");
  const [description, setDescription] = useState("");
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  const saveLocalStorage = () => {
    localStorage.setItem("productRequests", JSON.stringify(productRequests));
  };
  useEffect(() => {
    saveLocalStorage();
  }, [productRequests]);
  // extract ids from productRequest
  const getRequestIds = () => {
    const requestIds = [];
    productRequests.map((elem) => requestIds.push(elem.id));
    return requestIds;
  };
  const generateId = () => {
    const requestIds = getRequestIds();
    let idMayorPlusOne = Math.max(...requestIds) + 1;
    return idMayorPlusOne;
  };
  const selectCategory = (e) => {
    setCategory(e.target.outerText);
    setIsSelectBoxOpen(false);
  };
  const cleanForm = () => {
    setTitle("");
    setCategory("feature");
    setDescription("");
  };
  const addNewRequestToState = (newRequest) => {
    changeState([...productRequests, newRequest]);
  };

  const submit = (e) => {
    e.preventDefault();
    const request = {
      category,
      // comments: [],
      description,
      id: generateId(),
      status: "suggestion",
      title,
      upvotes: 0,
    };
    addNewRequestToState(request);
    cleanForm();
  };
  // go to suggestion page
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="NewFeedback">
      <button onClick={goBack}>
        <IconArrowLeft style={{ marginRight: "8px" }} /> Go Back
      </button>
      <form className="form" onSubmit={submit}>
        <span className="iconPlus">
          <IconPlus />
        </span>
        <h2>Create New Feedback</h2>
        <div>
          <label htmlform="email">Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            id="title"
            required
            autoCapitalize="on"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="divSelectBox">
          <h4>Category</h4>
          <p>Choose a category for your feedback</p>
          <div className="selectBox">
            <div>
              <p>{category}</p>
              <IconArrowDown
                onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
              />
            </div>
            <ul
              className={`categoryList ${isSelectBoxOpen ? "open" : "close"}`}
            >
              <li onClick={(e) => selectCategory(e)}>UI</li>
              <li onClick={(e) => selectCategory(e)}>UX</li>
              <li onClick={(e) => selectCategory(e)}>enhancement</li>
              <li onClick={(e) => selectCategory(e)}>bug</li>
              <li onClick={(e) => selectCategory(e)}>feature</li>
            </ul>
          </div>
        </div>
        <div>
          <label htmlform="pass">Feedback Detail</label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <input
            type="text"
            id="description"
            required
            autoCapitalize="on"
            maxLength="250"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="containerBtn">
          <button type="submit" className="addFeedbackBtn">
            Add Feedback
          </button>
          <span className="cancelBtn" onClick={cleanForm}>
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
};

export default NewFeedback;
