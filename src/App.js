import "./App.css";
import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList";
import { useState } from "react";
import { testItemList } from "./components/util/Util";

function App() {
  const [showList, setShowList] = useState(testItemList);
  const [renderList, setRenderList] = useState(null);

  const getFormData = (data) => {
    const itemInfoObj = {
      ...data,
      id: new Date().getTime(),
    };
    setShowList([itemInfoObj, ...showList]);
    setRenderList([itemInfoObj, ...showList]);
  };

  return (
    <div className="wrapper">
      <InputForm getFormData={getFormData} />
      <ItemList
        showList={showList}
        renderList={renderList}
        setRenderList={setRenderList}
      />
    </div>
  );
}

export default App;
