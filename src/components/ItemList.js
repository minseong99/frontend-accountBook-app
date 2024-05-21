import "./ItemList.css";
import { useEffect, useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";

const ItemList = (props) => {
  const [sortBy, setSortBy] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [startFilter, setStartFilter] = useState(null);
  const [endFilter, setEndFilter] = useState(null);

  useEffect(() => {
    filterByType(filterType);
    sort(sortBy);
    filterByTerm(startFilter, endFilter);
  }, [filterType, sortBy, startFilter, endFilter]);

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
    console.log(props.renderList);

    setSortBy(data);
  };

  // 유형에 따른 필터링
  const filterByType = (data) => {
    if (data === null) return;

    // data는 list의 value값
    const filteredList = props.showList.filter((item) => item.type === data);

    props.setRenderList(filteredList);

    setFilterType(data);
  };

  // 기간 선택에 따른 필터링
  const filterByTerm = (start, end) => {
    if (!start || !end) return;
    const startTerm = new Date(start).getTime();
    const endTerm = new Date(end).getTime();

    // 범위가 작은것에서 커질때 안나타나는 현상을 해결하기 위해
    if (startTerm < startFilter || endTerm > endFilter) {
      filterByType(filterType);

      setStartFilter(startTerm);
      setEndFilter(endTerm);
      return;
    }

    // 시작기간을 더 늦게 설정할경우 종료
    if (startTerm > endTerm) return;
    const filteredByTermList = props.renderList.filter((itemInfo) => {
      const itemDateTime = new Date(itemInfo.date).getTime();
      return itemDateTime >= startTerm && itemDateTime <= endTerm;
    });

    props.setRenderList(filteredByTermList);

    setStartFilter(startTerm);
    setEndFilter(endTerm);
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
