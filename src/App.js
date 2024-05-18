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
  const getData = (data) => {
    console.log(data);
  };

  return (
    <div className="Wrapper">
      <InputForm config={config} getData={getData} />
      <SortByForm />
      <ItemList />
    </div>
  );
}

export default App;
