import React from "react";

const DisplaySearch = ({ name, review }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{review}</p>
    </div>
  );
};

export default DisplaySearch;
