import "./App.css";
import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState([]);
  const [renderList, setRenderList] = useState([]);

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
      findTarget: (itemInfo) => Number(itemInfo.price),
    },
    {
      label: "가격 낮은 순",
      value: "priceDown",
      findTarget: (itemInfo) => Number(itemInfo.price),
    },
    {
      label: "최신순",
      value: "latest",
      findTarget: (itemInfo) => new Date(itemInfo.date).getTime(),
    },
    {
      label: "오래된 순",
      value: "oldest",
      findTarget: (itemInfo) => new Date(itemInfo.date).getTime(),
    },
  ];

  const getFormData = (data) => {
    setShowList((preList) => [data, ...preList]);
    setRenderList([data, ...showList]);
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
        filterByTerm={filterByTerm}
        renderList={renderList}
        setRenderList={setRenderList}
      />
    </div>
  );
}

export default App;
