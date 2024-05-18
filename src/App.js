import "./App.css";
import InputForm from "./components/InputForm";
import SortByForm from "./components/SortByForm";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="Wrapper">
      <InputForm />
      <SortByForm />
      <ItemList />
    </div>
  );
}

export default App;
