import React, { useEffect, useState } from "react";
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";

import "./newFeedback.scss";

const NewFeedback = ({ productRequests, changeState }) => {
  // states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("feature");
  const [description, setDescription] = useState("");
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  useEffect(() => {
    console.log(productRequests);
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
    //changeState(newRequest);
    changeState([...productRequests, newRequest]);
  };
  const saveLocalStorage = () => {
    localStorage.setItem("productRequests", JSON.stringify(productRequests));
  };
  const submit = (e) => {
    e.preventDefault();
    const request = {
      id: generateId(),
      title,
      category,
      description,
      upvotes: 0,
      status: "suggestion",
    };
    // console.log(request);
    addNewRequestToState(request);
    cleanForm();
  };
  // console.log(productRequests);
  return (
    <div>
      soy la pagina del new feedback
      <form className="newFeedbackForm" onSubmit={submit}>
        <div>
          <label htmlform="email">Feedback Title</label>
          <input
            type="text"
            id="title"
            required
            autoCapitalize="on"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p>Ctegory</p>
          <div className="form__selectBox">
            {category}
            <IconArrowDown
              onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
            />
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
        <button className="addFeedbackBtn">Add Feedback</button>
      </form>
      <button className="cancelBtn" onClick={cleanForm}>
        Cancel
      </button>
    </div>
  );
};

export default NewFeedback;
