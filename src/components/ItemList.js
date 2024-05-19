import "./ItemList.css";
import { useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  const [sortBy, setSortBy] = useState(null);

  const sort = (data) => {
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
      } else if (data === "priceUp" || data === "latest") {
        // desc
        return valueB - valueA;
      }
    });
    props.setRenderList(sortedList);
    setSortBy(data);
  };

  const filterByType = (data) => {
    // data는 list의 value값
    const filteredList = props.showList.filter((item) => item.type === data);
    console.log(sortBy);
    if (sortBy) {
      sort(sortBy);
    } else {
      props.setRenderList(filteredList);
    }
  };

  return (
    <>
      <FilterAndSortBy
        typeList={props.typeList}
        sortList={props.sortList}
        filterByType={filterByType}
        sortBy={sort}
        filterByTerm={props.filterByTerm}
      />
      <div class="list-items">
        {props.renderList.map((itemInfo) => {
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
        })}
      </div>
    </>
  );
};

export default ItemList;
