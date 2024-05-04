import { useEffect, useState } from "react";
import ReactImageMagnify from "react-magnify-image";
import { useParams } from "react-router-dom";
import MainScreen from "../../../screens/maincreen";
import ImageMagnifier from "../Reuseable/ImageMagnifier";
import "./ProductDetail.scss";
import ProductRating from "./ProductRating";
import ProductSpecification from "./ProductSpecification";
const ProductDetail = () => {
  const [read, setRead] = useState(false);
  const [hiddenText, setHiddenText] = useState(false);
  const [number, setNumber] = useState(1);
  const [error, setError] = useState(false);

  const imageList = [
    {
      alt: "Tee",
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      alt: "Tee",
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      alt: "Tee",
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      alt: "Tee",
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];
  const [mainImage, setMainImage] = useState(imageList[0].src);
  const colorList = [
    { color: "Texas Tea", id: "color_tt" },
    { color: "Fiesta Red", id: "color_fr" },
    { color: "Cobalt Blue", id: "color_cb" },
  ];
  const sizeList = [
    { size: "XS", id: "size_xs" },
    { size: "S", id: "size_s" },
    { size: "M", id: "size_m" },
    { size: "L", id: "size_l" },
    { size: "XL", id: "size_xl" },
  ];
  let rated = 4;
  let unrated = 5 - rated;

  const params = useParams();
  console.log(params.productId);
  return (
    <MainScreen>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="relative mt-4">
                <div
                  className="img-magnifier-container"
                  onMouseEnter={() => setHiddenText(true)}
                  onMouseLeave={() => setHiddenText(false)}
                >
                  <ImageMagnifier src={mainImage} width="100%" height="100%" />
                </div>

                {!hiddenText && (
                  <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>

                    <span className="ml-1.5 text-xs"> Hover to zoom </span>
                  </div>
                )}
              </div>

              <ul className="mt-1 flex gap-1">
                {imageList.map((img, index) => {
                  return (
                    <li key={index}>
                      <img
                        onClick={() => setMainImage(img.src)}
                        alt={img.alt}
                        src={img.src}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="sticky top-0">
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{params.productId}</h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="mt-2 -ml-0.5 flex">
                    {[...Array(rated)].map(() => {
                      return (
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      );
                    })}
                    {[...Array(unrated)].map(() => {
                      return (
                        <svg
                          className="h-5 w-5 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      );
                    })}
                  </div>
                </div>

                <p className="text-lg font-bold">$119.99</p>
              </div>

              <details className="group relative mt-4">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span
                      onClick={() => {
                        setRead(!read);
                      }}
                      className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                    >
                      {!read ? "Read More" : "Read Less"}
                    </span>
                  </div>
                </summary>

                <div className="prose max-w-none pb-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      {colorList.map((item) => {
                        return (
                          <label
                            htmlFor={item.id}
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="color"
                              id={item.id}
                              className="peer sr-only"
                            />

                            <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                              {item.color}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      {sizeList.map((item) => {
                        return (
                          <label
                            htmlFor={item.id}
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id={item.id}
                              className="peer sr-only"
                            />

                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                              {item.size}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                <div className="mt-8 flex">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    {error ? <p>Plz input number {">"} 0</p> : <p></p>}
                    <input
                      type="number"
                      id="quantity"
                      value={number}
                      onChange={(e) => {
                        if (e.target.value > 0) {
                          setNumber(e.target.value);
                          setError(false);
                        } else {
                          setError(true);
                        }
                      }}
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ProductSpecification />

      <ProductRating />
    </MainScreen>
  );
};
export default ProductDetail;
