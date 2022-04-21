import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Category = (props) => {
  const { details } = props;
  return (
    <div className="d-flex pointer">
      <BsFillCircleFill className={`${details.className} me-3`} />
      <p>{details.displayName}</p>
    </div>
  );
};

export default Category;
