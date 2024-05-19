import React, { useState } from "react";
import "./ItemList.css";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  const [filterType, setFilterType] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  const filterByType = (data) => {
    // data는 list의 value값
    const filteredList = props.showList.filter((item) => item.type === data);
    setFilterType(data);
    setFilteredList(filteredList);
  };
  const expensesList = filterType ? filteredList : props.showList;

  const expenses = expensesList.map((itemInfo) => {
    const repurchaseText =
      itemInfo.repurchase === "true" ? "재구매o" : "재구매x";

    return (
      <div key={itemInfo.date} class="list-item">
        <label for="name">{itemInfo.name}</label>
        <label for="price">{itemInfo.price}</label>
        <label for="type">{itemInfo.type}</label>
        <label for="date">{itemInfo.date}</label>
        <label for="memo">{itemInfo.memo}</label>
        <label for="repurchase">{repurchaseText}</label>
      </div>
    );
  });

  return (
    <>
      <FilterAndSortBy
        typeList={props.typeList}
        sortList={props.sortList}
        filterByType={filterByType}
        sortBy={props.sortBy}
        filterByTerm={props.filterByTerm}
      />
      <div class="list-items">{expenses}</div>
    </>
  );
};

export default ItemList;
