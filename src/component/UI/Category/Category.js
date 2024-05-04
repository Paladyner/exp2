import CategoryList from "./CategoryList";
import "./Category.scss";
import data from "../../../data/dummydata.json";
import { useEffect, useState } from "react";
// const data = [{ name: "hi1" }, { name: "hi2" }];

const Category = () => {
  let itemList = [];
  let store = [];

  const list = data.map((data, index) => {
    itemList.push(data);
    if (itemList.length == 2) {
      store = itemList;
      itemList = [];
      return <CategoryList key={index} data={store} />;
    }
  });
  return (
    <div className="image-carousel ">
      <div className="item-list-wrapper ">
        <ul
          className=" item-list flex justify-center"
          style={{ width: "100%", transform: "translate(0px,0px)" }}
        >
          {list}
        </ul>
      </div>
    </div>
  );
};

export default Category;
