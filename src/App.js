import "./App.css";
import InputForm from "./components/InputForm";
import FilterAndSortBy from "./components/FilterAndSortBy";
import ItemList from "./components/ItemList";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState([{}]);
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
    { label: "가격 높은 순", value: "priceUp" },
    { label: "가격 낮은 순", value: "priceDown" },
    { label: "최신순", value: "latest" },
    { label: "오래된 순", value: "oldest" },
  ];
  const getFormData = (data) => {
    console.log(data);
  };

  const filterByType = (data) => {
    const filteredList = showList.filter((item) => item.type === data);
    setShowList(filteredList);
  };

  const getSortBy = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <InputForm
        config={config}
        getFormData={getFormData}
        typeList={typeList}
      />
      <FilterAndSortBy
        typeList={typeList}
        sortList={sortList}
        filterByType={filterByType}
        getSortBy={getSortBy}
      />
      <ItemList />
    </div>
  );
}

export default App;
