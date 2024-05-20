import "./ItemList.css";
import { useEffect, useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  const [sortBy, setSortBy] = useState(null);
  const [filterType, setFilterType] = useState(null);

  useEffect(() => {
    sort(sortBy);
  }, [filterType]);

  const sort = (data) => {
    if (data === null) return;
    // data는 list의 value값
    const { findTarget } = props.sortList.find(
      (column) => column.value === data
    );

    const sortedList = [...props.renderList].sort((a, b) => {
      const valueA = findTarget(a);
      const valueB = findTarget(b);

      console.log(valueA - valueB);

      if (data === "priceDown" || data === "oldest") {
        //asc
        return valueA - valueB;
      } else {
        // desc
        return valueB - valueA;
      }
    });
    props.setRenderList(sortedList);
    setSortBy(data);
  };

  const filterByType = (data) => {
    if (data === null) return;
    // data는 list의 value값
    const filteredList = props.showList.filter((item) => item.type === data);

    props.setRenderList(filteredList);
    setFilterType(data);
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
