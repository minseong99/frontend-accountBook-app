import React, { useState } from "react";

const Memo = (props) => {
  const [showMemo, setShowMemo] = useState(false);

  const showInputForm = () => {
    return (
      <input
        type="text"
        onChange={props.changeData}
        placeholder="메모를 입력하세요"
        className="memo"
      ></input>
    );
  };

  return (
    <div>
      <label for="memo">메모</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setShowMemo(e.target.checked);
        }}
        value={showMemo}
      ></input>
      {/* 체크박스에따라 메모작성input보여주기 */}
      {showMemo && <>{showInputForm()}</>}
    </div>
  );
};

export default Memo;
