import React, { useState } from "react";
import "./DropDown.css";

const DropDown = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [type, setType] = useState("");

  const handleclick = () => {
    setShowOption((preState) => !preState);
  };
  const handleclickOption = (type, e) => {
    setType(type);
    setShowOption(false);
    props?.changeData(e);
  };

  const renderOptions = props.typeList.map((type, index) => {
    return (
      <input
        class="type"
        type="button"
        onClick={(e) => handleclickOption(type, e)}
        value={type}
      ></input>
    );
  });

  return (
    <div class="form-option">
      <input
        class="button-option"
        onClick={handleclick}
        type="button"
        value={type ? type : props.optionDefault}
      ></input>
      {/* 드롭다운구현 */}
      {showOption && <>{renderOptions}</>}
    </div>
  );
};

export default DropDown;
