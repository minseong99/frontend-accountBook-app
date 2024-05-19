import React from "react";
import DropDown from "./forms/DropDown";
import "./FilterAndSortBy.css";

const FilterAndSortBy = (props) => {
  return (
    <div className="form-filter-sortby">
      <DropDown
        optionList={props.typeList}
        optionDefault={"유형 필터"}
        filterByType={props.filterByType}
      />
      <DropDown
        optionList={props.sortList}
        optionDefault={"정렬 기준"}
        sortBy={props.sortBy}
      />
      <div className="class-time-start">
        <label for="start-date">시작 기간</label>
        <input type="date" id="start-date" />
      </div>
      <div className="class-time-end">
        <label for="end-date">끝 기간</label>
        <input type="date" id="end-date" />
      </div>
    </div>
  );
};

export default FilterAndSortBy;
