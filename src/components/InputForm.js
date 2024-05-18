import React from "react";
import DropDown from "./forms/DropDown";
import Memo from "./forms/Memo";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  border: 1px solid gray;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const InputForm = () => {
  return (
    <Form>
      <div>
        <label for="name">이름</label>
        <input type="text"></input>
      </div>

      <div>
        <label for="price">가격</label>
        <input type="number"></input>
      </div>

      <DropDown />

      <div>
        <label for="date">구입 날짜</label>
        <input type="date"></input>
      </div>

      <Memo />
      <div>
        <label for="repurchase">재구매 의사</label>
        <input
          type="radio"
          name="repurchase"
          for="yes-repurchase"
          value="yes"
          checked
        ></input>
        <label for="yes-repurchase">한다</label>
        <input
          type="radio"
          name="repurchase"
          id="no-repurchase"
          value="no"
        ></input>
        <label for="no-repurchase">안한다</label>
      </div>

      <button type="submit">제출하기</button>
    </Form>
  );
};

export default InputForm;
