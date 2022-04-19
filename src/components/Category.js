import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Category = (props) => {
  const { details } = props;
  return (
    <div className="d-flex ">
      <BsFillCircleFill className={details.className} />
      <p>{details.displayName}</p>
    </div>
  );
};

export default Category;
