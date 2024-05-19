import React from "react";

const ItemList = (props) => {
  return (
    <div>
      {props.showList.map((itemInfo) => {
        const repurchaseText =
          itemInfo.repurchase == "true" ? "재구매o" : "재구매x";
        console.log(itemInfo.repurchase);
        return (
          <div key={itemInfo.date}>
            <span>{itemInfo.name}</span>
            <span>{itemInfo.price}</span>
            <span>{itemInfo.type}</span>
            <span>{itemInfo.date}</span>
            <span>{itemInfo.memo}</span>
            <span>{repurchaseText}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
