import React, { useState } from "react";
import DropDown from "./forms/DropDown";
import Memo from "./forms/Memo";
import "./InputForm.css";
import { config, typeList } from "./util/Util.js";

const InputForm = ({ getFormData }) => {
  const [purchaseInfo, setPurchaseInfo] = useState({
    id: null,
    name: "",
    price: 0,
    type: "",
    date: null,
    memo: "",
    repurchase: "true",
  });

  const changeData = (e) => {
    const { makeState } = config.find(
      (column) => column.label === e.target.className
    );

    setPurchaseInfo(makeState(purchaseInfo, e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(purchaseInfo);
  };

  return (
    <form className="form-purchase-info" onSubmit={handleSubmit}>
      <div>
        <label for="name">이름</label>
        <input
          type="text"
          value={purchaseInfo.name}
          onChange={changeData}
          className="name"
        ></input>
      </div>

      <div>
        <label for="price">가격</label>
        <input
          type="number"
          value={purchaseInfo.price}
          onChange={changeData}
          className="price"
        ></input>
      </div>

      <div class="dropdown">
        <label for="type">유형</label>
        <DropDown
          changeData={changeData}
          optionDefault={"유형옵션"}
          optionList={typeList}
        />
      </div>

      <div>
        <label for="date">구입 날짜</label>
        <input
          type="date"
          value={purchaseInfo.date}
          onChange={changeData}
          className="date"
        ></input>
      </div>

      <Memo changeData={changeData} />
      <div>
        <label for="repurchase">재구매 의사</label>
        <input
          type="radio"
          name="repurchase"
          id="yes-repurchase"
          className="repurchase"
          value="true"
          onClick={changeData}
        ></input>
        <label for="yes-repurchase">한다</label>
        <input
          type="radio"
          name="repurchase"
          id="no-repurchase"
          value="false"
          onClick={changeData}
          className="repurchase"
        ></input>
        <label for="no-repurchase">안한다</label>
      </div>

      <button type="submit">제출하기</button>
    </form>
  );
};

export default InputForm;
