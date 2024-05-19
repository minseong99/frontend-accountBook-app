import React, { useRef, useState } from "react";
import "./DropDown.css";

const DropDown = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [typeLabel, setTypeLabel] = useState("");
  const typeValue = useRef(null);

  const handleclick = () => {
    setShowOption((preState) => !preState);
  };
  const handleclickOption = (typeObj, e) => {
    setTypeLabel(typeObj.label);
    setShowOption(false);
    props.changeData?.(e);

    //type filter
    typeValue.current = typeObj.value;
    props.filterByType?.(typeValue.current);
  };

  const renderOptions = props.optionList.map((typeObj, index) => {
    return (
      <input
        class="type"
        type="button"
        onClick={(e) => handleclickOption(typeObj, e)}
        value={typeObj.label}
        name={typeObj.value}
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
