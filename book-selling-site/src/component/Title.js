import React from "react";

const Title = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </>
  );
};

export default Title;
