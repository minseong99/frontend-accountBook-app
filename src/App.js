import "./App.css";
import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState([]);
  const config = [
    {
      label: "name",
      makeState: (preState, event) => ({
        ...preState,
        name: event.target.value,
      }),
    },
    {
      label: "price",
      makeState: (preState, event) => ({
        ...preState,
        price: event.target.value,
      }),
    },
    {
      label: "type",
      makeState: (preState, event) => ({
        ...preState,
        type: event.target.name,
      }),
    },
    {
      label: "date",
      makeState: (preState, event) => ({
        ...preState,
        date: event.target.value,
      }),
    },
    {
      label: "memo",
      makeState: (preState, event) => ({
        ...preState,
        memo: event.target.value,
      }),
    },
    {
      label: "repurchase",
      makeState: (preState, event) => ({
        ...preState,
        repurchase: event.target.value,
      }),
    },
  ];

  const typeList = [
    { label: "식료품", value: "foods" },
    { label: "패션의류/잡화", value: "clothes" },
    { label: "뷰티", value: "beauty" },
    { label: "유아동", value: "baby" },
    { label: "주방용품", value: "kitchen" },
    { label: "스포츠", value: "sports" },
  ];

  const sortList = [
    {
      label: "가격 높은 순",
      value: "priceUp",
      findTarget: (itemInfo) => itemInfo.price,
    },
    {
      label: "가격 낮은 순",
      value: "priceDown",
      findTarget: (itemInfo) => itemInfo.price,
    },
    {
      label: "최신순",
      value: "latest",
      findTarget: (itemInfo) => itemInfo.date,
    },
    {
      label: "오래된 순",
      value: "oldest",
      findTarget: (itemInfo) => itemInfo.date,
    },
  ];
  const getFormData = (data) => {
    setShowList((preList) => [data, ...preList]);
  };

  const sortBy = (data) => {
    // data는 list의 value값
    const { findTarget } = sortList.find((column) => column.value === data);
    const sortedList = showList.sort((a, b) => {
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
    setShowList(sortedList);
  };

  const filterByTerm = (start, end) => {
    console.log(start, end);
    const startTerm = start ? new Date(start) : new Date(0);
    const endTerm = end ? new Date(end) : new Date();
    const filteredList = showList.filter((itemInfo) => {
      const itemDateTime = new Date(itemInfo.date).getTime();
      return (
        itemDateTime >= startTerm.getTime() && itemDateTime <= endTerm.getTime()
      );
    });
    setShowList(filteredList);
  };

  return (
    <div className="wrapper">
      <InputForm
        config={config}
        getFormData={getFormData}
        typeList={typeList}
      />
      <ItemList
        showList={showList}
        typeList={typeList}
        sortList={sortList}
        sortBy={sortBy}
        filterByTerm={filterByTerm}
      />
    </div>
  );
}

export default App;
