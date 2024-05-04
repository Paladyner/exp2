import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Pagination.scss";

const PER_PAGE = 9;

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(data);

  function handlerPageClick({ selected: selectedPage }) {
    // console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  //
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.name} className="block overflow-hidden group">
            <img
              src={item.src}
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
            />

            <div className="relative pt-3 bg-white">
              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {item.name}
              </h3>

              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900">
                  {item.price}
                </span>
              </p>
            </div>
          </Link>
        </li>
      );
    });

  const pageCount = Math.ceil(data.length / PER_PAGE);
  // const sortProduct = (dataSort) => {
  //   let getSort = document.getElementsByName("sort")[0];
  //   if (getSort.value == "DESC") {
  //     dataSort.sort(({ price: a }, { price: b }) => {
  //       a = parseFloat(a.slice(1), 10) || 0;
  //       b = parseFloat(b.slice(1), 10) || 0;

  //       return b - a;
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
  // console.log(sortProduct(data));
  return (
    <>
      {/* {children} */}
      <div className="lg:col-span-3">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentPageData.length > 0 ? currentPageData : "Product not Found"}
        </ul>
      </div>
      <div className="mt-[40px] col-span-3 flex justify-center">
        <ReactPaginate
          previousLabel={" Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlerPageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default Pagination;
