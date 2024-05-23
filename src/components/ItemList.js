import "./ItemList.css";
import { useEffect, useState } from "react";
import FilterAndSortBy from "./FilterAndSortBy";
import { sortList } from "./util/Util.js";

let preList;

const ItemList = (props) => {
  const [sortBy, setSortBy] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [startFilter, setStartFilter] = useState(null);
  const [endFilter, setEndFilter] = useState(null);

  useEffect(() => {
    makeFilterSortList("submit", false);
  }, [props.isSubmit]);

  // 정렬기준에 따른 정렬
  const sort = (data, isSelectedNew) => {
    if (data === null) return;

    // 새로운것을 선택한지에 안한지에 따라 바꿀 리스트가 달라짐
    const targetList = isSelectedNew ? props.showList : preList;

    // data는 list의 value값
    const { findTarget } = sortList.find((column) => column.value === data);

    const sortedList = [...targetList].sort((a, b) => {
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
    setSortBy(data);

    preList = sortedList;
    makeFilterSortList("sort", isSelectedNew);
  };

  // 유형에 따른 필터링
  const filterByType = (data, isSelectedNew) => {
    if (data === null) return;
    // 새로운것을 선택한지에 안한지에 따라 바꿀 리스트가 달라짐
    const targetList = isSelectedNew ? props.showList : preList;

    // data는 list의 value값
    const filteredList = targetList.filter((item) => item.type === data);

    props.setRenderList(filteredList);
    setFilterType(data);

    preList = filteredList;
    makeFilterSortList("filterType", isSelectedNew);
  };

  // 기간 선택에 따른 필터링
  const filterByTerm = (start, end, isSelectedNew) => {
    if (!start || !end) return;

    // 새로운것을 선택한지에 안한지에 따라 바꿀 리스트가 달라짐
    const targetList = isSelectedNew ? props.showList : preList;
    const startTerm = new Date(start).getTime();
    const endTerm = new Date(end).getTime();

    // 시작기간을 더 늦게 설정할경우 종료
    if (startTerm > endTerm) return;

    const filteredByTermList = targetList.filter((itemInfo) => {
      const itemDateTime = new Date(itemInfo.date).getTime();
      return itemDateTime >= startTerm && itemDateTime <= endTerm;
    });

    props.setRenderList(filteredByTermList);

    setStartFilter(startTerm);
    setEndFilter(endTerm);

    preList = filteredByTermList;
    makeFilterSortList("filterTerm", isSelectedNew);
  };

  // 필터 또는 정렬기준이 선택이 되면 랜더링할 리스트를 만드는 함수
  const makeFilterSortList = (com, isSelectedNew) => {
    // filterType이 새로 선택되었을때
    if (com === "filterType" && isSelectedNew) {
      sort(sortBy, false);
      filterByTerm(startFilter, endFilter, false);
    }
    // 정렬기준이 새로 선택되었을때
    else if (com === "sort" && isSelectedNew) {
      filterByType(filterType, false);
      filterByTerm(startFilter, endFilter, false);
    }
    // 구매 날짜 기간 필터가 새로 선택되었을때
    else if (com === "filterTerm" && isSelectedNew) {
      filterByType(filterType, false);
      sort(sortBy, false);
    }
    // 제출이 일어날 경우
    else if (com === "submit") {
      preList = props.showList;

      filterByType(filterType, false);
      sort(sortBy, false);
      filterByTerm(startFilter, endFilter, false);

      props.setIsSubmit(false);
    }
  };

  const renderList = props.renderList ? props.renderList : props.showList;

  return (
    <>
      <FilterAndSortBy
        filterByType={filterByType}
        sortBy={sort}
        filterByTerm={filterByTerm}
      />
      <div class="list-items">
        {renderList.map((itemInfo) => {
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
