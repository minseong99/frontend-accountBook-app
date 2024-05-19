import "./App.css";
import InputForm from "./components/InputForm";
import SortByForm from "./components/SortByForm";
import ItemList from "./components/ItemList";

function App() {
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
        type: event.target.value,
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
    "식료품",
    "패션의류/잡화",
    "뷰티",
    "유아동",
    "주방용품",
    "생활용품",
    "스포츠",
  ];
  const getData = (data) => {
    console.log(data);
  };

  return (
    <div className="Wrapper">
      <InputForm config={config} getData={getData} typeList={typeList} />
      <SortByForm />
      <ItemList />
    </div>
  );
}

export default App;
