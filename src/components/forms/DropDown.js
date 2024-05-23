import React, { useState } from "react";
import "./DropDown.css";

const DropDown = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [typeLabel, setTypeLabel] = useState("");

  const handleclick = () => {
    setShowOption((preState) => !preState);
  };
  const handleclickOption = (optionObj, e) => {
    setTypeLabel(optionObj.label);
    setShowOption(false);
    props.changeData?.(e);

    //type filter

    props.filterByType?.(optionObj.value, true);
    //sort

    props.sortBy?.(optionObj.value, true);
  };

  const renderOptions = props.optionList.map((optionObj) => {
    let className;
    if (props.optionDefault === "유형옵션") {
      className = "type";
    } else if (props.optionDefault === "유형 필터") {
      className = "filter";
    } else if (props.optionDefault === "정렬 기준") {
      className = "sort";
    }
    return (
      <input
        class={className}
        type="button"
        onClick={(e) => handleclickOption(optionObj, e)}
        value={optionObj.label}
        name={optionObj.value}
      ></input>
    );
  });

  return (
    <div class="form-option">
      <input
        class="button-option"
        onClick={handleclick}
        type="button"
        value={typeLabel ? typeLabel : props.optionDefault}
      ></input>
      {/* 드롭다운구현 */}
      {showOption && <>{renderOptions}</>}
    </div>
  );
};

export default DropDown;
