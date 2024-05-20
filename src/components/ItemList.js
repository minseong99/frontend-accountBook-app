import "./ItemList.css";
// import { useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  // const [sortBy, setSortBy] = useState(null);
  // const [filterType, setFilterType] = useState(null);

  // const [startFilter, setStartFilter] = useState(null);
  // const [endFilter, setEndFilter] = useState(null);

  // 정렬기준에 따른 기준
  const sort = (data) => {
    if (data === null) return;
    // data는 list의 value값
    const { findTarget } = props.sortList.find(
      (column) => column.value === data
    );

    const sortedList = [...props.renderList].sort((a, b) => {
      const valueA = findTarget(a);
      const valueB = findTarget(b);

      if (data === "priceDown" || data === "oldest") {
        //asc
        return valueA - valueB;
      } else {
        // desc
        return valueB - valueA;
      }
    });
    props.setRenderList(sortedList);
    // setSortBy(data);
  };

  // 유형에 따른 필터링
  const filterByType = (data) => {
    if (data === null) return;
    // data는 list의 value값
    const filteredList = props.showList.filter((item) => item.type === data);

    props.setRenderList(filteredList);
    // setFilterType(data);
  };

  // 기간 선택에 따른 필터링
  const filterByTerm = (start, end) => {
    if (!start || !end) return;

    const startTerm = start ? new Date(start).getTime() : new Date(0).getTime();
    const endTerm = end ? new Date(end).getTime() : new Date().getTime();
    if (startTerm > endTerm) return;
    const filteredByTermList = props.showList.filter((itemInfo) => {
      const itemDateTime = new Date(itemInfo.date).getTime();
      return itemDateTime >= startTerm && itemDateTime <= endTerm;
    });
    props.setRenderList(filteredByTermList);
    // setStartFilter(start);
    // setEndFilter(end);
  };

  return (
    <>
      <FilterAndSortBy
        typeList={props.typeList}
        sortList={props.sortList}
        filterByType={filterByType}
        sortBy={sort}
        filterByTerm={filterByTerm}
      />
      <div class="list-items">
        {props.renderList.map((itemInfo) => {
          const repurchaseText =
            itemInfo.repurchase === "true" ? "재구매o" : "재구매x";
          return (
            <div key={itemInfo.id} class="list-item">
              <label for="name">{itemInfo.name}</label>
              <label for="price">{itemInfo.price}</label>
              <label for="type">{itemInfo.type}</label>
              <label for="date">{itemInfo.date}</label>
              <label for="memo">{itemInfo.memo}</label>
              <label for="repurchase">{repurchaseText}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
