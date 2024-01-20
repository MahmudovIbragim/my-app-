import React from "react";

const List = ({ texts }) => {
  return (
    <div>
      <div>
        {texts.map((item) => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>
    </div>
  );
};

export default List;
