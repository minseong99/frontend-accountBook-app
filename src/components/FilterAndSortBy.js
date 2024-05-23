import React, { useState } from "react";
import DropDown from "./forms/DropDown";
import "./FilterAndSortBy.css";
import { sortList, typeList } from "./util/Util.js";

const FilterAndSortBy = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (e) => {
    const id = e.target.id;
    if (id === "start-date") {
      setStartDate(e.target.value);
      props.filterByTerm(e.target.value, endDate, true);
    } else if (id === "end-date") {
      setEndDate(e.target.value);
      props.filterByTerm(startDate, e.target.value, true);
    }
  };

  return (
    <div className="form-filter-sortby">
      <DropDown
        optionList={typeList}
        optionDefault={"유형 필터"}
        filterByType={props.filterByType}
      />
      <DropDown
        optionList={sortList}
        optionDefault={"정렬 기준"}
        sortBy={props.sortBy}
      />
      <div className="class-time-start">
        <label for="start-date">시작 기간</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleChange}
        />
      </div>
      <div className="class-time-end">
        <label for="end-date">끝 기간</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterAndSortBy;
