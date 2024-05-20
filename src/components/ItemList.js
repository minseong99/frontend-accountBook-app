import "./ItemList.css";
import { useEffect, useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  // const [sortBy, setSortBy] = useState(null);
  // const [filterType, setFilterType] = useState(null);
  // const [filterTerm, setFilterTerm] = useState({
  //   start: null,
  //   end: null,
  // });

  // useEffect(() => {
  //   sort(sortBy);
  //   // filterByTerm(filterTerm.start, filterTerm.end);
  // }, [filterType, filterTerm]);

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

  const filterByType = (data) => {
    if (data === null) return;
    // data는 list의 value값
    const filteredList = props.renderList.filter((item) => item.type === data);

    props.setRenderList(filteredList);
    // setFilterType(data);
  };

  const filterByTerm = (start, end) => {
    if (!start || !end) return;

    const startTerm = start ? new Date(start) : new Date(0);
    const endTerm = end ? new Date(end) : new Date();
    const filteredByTermList = props.renderList.filter((itemInfo) => {
      const itemDateTime = new Date(itemInfo.date).getTime();
      return (
        itemDateTime >= startTerm.getTime() && itemDateTime <= endTerm.getTime()
      );
    });
    props.setRenderList(filteredByTermList);
    // setFilterTerm({
    //   start: start,
    //   end: end,
    // });
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
