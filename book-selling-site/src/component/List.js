import React from "react";
import Title from "./Title";
function List() {
  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
    },
  ];
  return (
    <div>
      {data.map((item) => {
        <Title title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default List;
