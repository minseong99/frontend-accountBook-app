import React, { useState } from "react";
import "./DropDown.css";

const typeList = [
  "식료품",
  "패션의류/잡화",
  "뷰티",
  "유아동",
  "주방용품",
  "생활용품",
  "스포츠",
];

const DropDown = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [type, setType] = useState("");

  const handleclick = () => {
    setShowOption((preState) => !preState);
  };
  const handleclickOption = (type, e) => {
    setType(type);
    setShowOption(false);
    props.changeData(e);
  };

  const renderOptions = typeList.map((type, index) => {
    return (
      <input
        class="type"
        type="button"
        onClick={(e) => handleclickOption(type, e)}
        key={index}
        value={type}
      ></input>
    );
  });

  return (
    <div class="dropdown">
      <label for="type">유형</label>
      <div class="form-option">
        <input
          class="button-option"
          onClick={handleclick}
          type="button"
          value={type ? type : "옵션"}
        ></input>
        {/* 드롭다운구현 */}
        {showOption && <>{renderOptions}</>}
      </div>
    </div>
  );
};

export default DropDown;
