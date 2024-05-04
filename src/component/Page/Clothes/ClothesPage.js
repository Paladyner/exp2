import { Button } from "antd";
import { useEffect, useState } from "react";
import MainScreen from "../../../screens/maincreen";
import CheckBoxGroup from "../../UI/Reuseable/CheckBoxGroup";
import Pagination from "../../UI/Reuseable/Pagination";
import clothesData from "../../../data/clothesdata.json";
import Product from "../../UI/Product/Product";

const ClothesPage = () => {
  // console.log(clothesData);
  const clothesTypeList = [
    { clothes: "T-shirt", id: "t-shirt" },
    { clothes: "Jeans", id: "jeans" },
    { clothes: "Pants", id: "pants" },
    { clothes: "Tops", id: "tops" },
    { clothes: "Tanks", id: "tanks" },
    { clothes: "Underwear", id: "underwear" },
  ];

  const colorList = [
    { color: "Red", id: "Red" },
    { color: "Blue", id: "Blue" },
    { color: "Green", id: "Green" },
    { color: "Orange", id: "Orange" },
    { color: "Purple", id: "rPurple" },
    { color: "Teal", id: "Teal" },
  ];

  const itemList = clothesData;

  let itemType = [];
  let itemColor = [];

  let store = [];
  let store1 = [];
  let store3 = [];
  const [itemFilter, setItemFilter] = useState(itemList);
  const [sortProduct, setSortProduct] = useState(itemList);

  const colorHandler = (e) => {
    let get = document.getElementsByName(e);

    for (let i = 0; i < get.length; i++) {
      get[i].checked = false;
    }
  };

  // const sortProductHandler = (dataSort) => {
  //   let getSort = document.getElementsByName("sort")[0];
  //   if (getSort.value == "DESC") {
  //     dataSort.sort(({ price: a }, { price: b }) => {
  //       a = parseFloat(a.slice(1), 10) || 0;
  //       b = parseFloat(b.slice(1), 10) || 0;

  //       return b - a;
  //     });
  //   }
  //   if (getSort.value == "None") {
  //     dataSort.sort(({ id: a }, { id: b }) => {
  //       a = parseFloat(a.slice(0), 10) || 0;
  //       b = parseFloat(b.slice(0), 10) || 0;
  //       return a - b;
  //     });
  //   }
  //   if (getSort.value == "ASC") {
  //     dataSort.sort(({ price: a }, { price: b }) => {
  //       a = parseFloat(a.slice(1), 10) || 0;
  //       b = parseFloat(b.slice(1), 10) || 0;

  //       return a - b;
  //     });
  //   }

  //   return dataSort;
  // };

  const searchHandler = () => {
    let get = document.getElementsByName("clothes");
    let getColor = document.getElementsByName("color");

    get.forEach((e) => {
      if (e.checked == true) {
        itemType.push(e.id);
      }
    });

    getColor.forEach((e) => {
      if (e.checked == true) {
        itemColor.push(e.id);
      }
    });

    itemList.map((item) => {
      for (let i = 0; i < itemType.length; i++) {
        if (itemType[i] == item.type) {
          store.push(item);
        }
      }
    });

    if (store.length == 0) {
      store = itemList;
    }

    store.map((item) => {
      for (let i = 0; i < itemColor.length; i++) {
        if (itemColor[i] == item.color) {
          store1.push(item);
        }
      }
    });

    if (itemType.length == 0 && itemColor.length == 0) {
      setItemFilter(itemList);
    } else {
      if (itemColor.length == 0) {
        setItemFilter(store);
      } else {
        setItemFilter(store1);
      }
    }
  };

  return (
    <MainScreen>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="max-w-md mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="block mt-8 lg:hidden">
            <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div>
                <label
                  htmlFor="SortBy"
                  className="block text-xs font-medium text-gray-700"
                >
                  Sort By
                </label>

                <select
                  id="SortBy"
                  className="mt-1 text-sm border-gray-300 rounded"
                  name="sort"
                >
                  <option value="None">None</option>
                  <option value="DESC" onClick={() => console.log("hi")}>
                    Price, DESC
                  </option>
                  <option value="ASC">Price, ASC</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filters
                </p>

                <div className="mt-1 space-y-2">
                  <details className="overflow-hidden border border-gray-300 rounded">
                    <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-sm font-medium">Clothes Type</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {/* 0 Selected */}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() => colorHandler("clothes")}
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        {clothesTypeList.map((item, index) => {
                          return (
                            <li key={index}>
                              <label
                                htmlFor={item.id}
                                className="inline-flex items-center gap-2"
                              >
                                <input
                                  type="checkbox"
                                  id={item.clothes}
                                  name="clothes"
                                  className="w-5 h-5 border-gray-300 rounded"
                                />

                                <span className="text-sm font-medium text-gray-700">
                                  {item.clothes}
                                </span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden border border-gray-300 rounded">
                    <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-sm font-medium"> Colors </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {/* 0 Selected */}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() => colorHandler("color")}
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        {colorList.map((item, index) => {
                          return (
                            <li key={index}>
                              <label
                                htmlFor={item.id}
                                className="inline-flex items-center gap-2"
                              >
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  name="color"
                                  className="w-5 h-5 border-gray-300 rounded"
                                />

                                <span className="text-sm font-medium text-gray-700">
                                  {item.color}
                                </span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>

                  <Button
                    onClick={() => searchHandler()}
                    style={{
                      backgroundColor: "#f76402",
                      color: "white",
                      padding: 10,
                      borderRadius: 20,
                      width: "100%",
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 ">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Pagination data={itemFilter} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainScreen>
  );
};

export default ClothesPage;
