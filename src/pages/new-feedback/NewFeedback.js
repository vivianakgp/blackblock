import React, { useState } from "react";
import { useSelector } from "react-redux";

const NewFeedback = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const productRequest = useSelector((state) => state.productRequest);
  console.log(productRequest);
  const submit = (e) => {
    e.preventDefault();
    const request = {
      id: 0,
      title,
      category,
      description,
      upvotes: 2,
      status: "suggestion",
    };
    console.log(request);
  };
  return (
    <div>
      soy la pagina del new feedback
      <form className="newFeedbackForm" onSubmit={submit}>
        <p>
          <label htmlform="email">Feedback Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label htmlform="pass">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </p>
        <p>
          <label htmlform="pass">Feedback Detail</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button className="addFeedbackBtn">Add Feedback</button>
      </form>
      <button className="cancelBtn">Cancel</button>
    </div>
  );
};

export default NewFeedback;
