import React, { useEffect } from "react";

import "./productRequest.scss";

const ProductRequest = () => {
  // const requestID = productRequest.map((elem) => {
  //   return elem.id;
  // });
  // console.log(requestID);

  // filter request with suggestion state
  const requestSuggestionStatus = productRequest.filter(
    (request) => request.status === "suggestion"
  );
  // order by highest number of votes
  const orderByMostUpvotes = (array, key) => {
    array.sort((a, b) => {
      return b[key] - a[key];
    });
  };
  useEffect(() => {
    orderByMostUpvotes(requestSuggestionStatus, "upvotes");
  }, []);
  console.log(requestSuggestionStatus);

  return (
    <div className="ProductRequest">
      soy la lista de sugerencias
      {requestSuggestionStatus.map((request) => (
        <li key={request.id}>{request.title}</li>
      ))}
    </div>
  );
};

export default ProductRequest;
