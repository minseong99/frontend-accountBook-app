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

const DropDown = () => {
  const [showOption, setShowOption] = useState(false);
  const [type, setType] = useState("");

  const handleOnclick = () => {
    setShowOption((preState) => !preState);
  };
  const handleOnclickOption = (type) => {
    setType(type);
    setShowOption(false);
  };

  const renderOptions = typeList.map((type, index) => {
    return (
      <div
        class="option-type"
        onClick={() => handleOnclickOption(type)}
        key={index}
      >
        {type}
      </div>
    );
  });

  return (
    <div class="dropdown">
      <label for="type">유형</label>
      <div class="form-option">
        <input
          class="button-option"
          onClick={handleOnclick}
          type="button"
          value={type ? type : ""}
        ></input>
        {/* 드롭다운구현 */}
        {showOption && <>{renderOptions}</>}
      </div>
    </div>
  );
};

export default DropDown;
