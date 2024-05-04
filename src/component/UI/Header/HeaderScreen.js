
import { Button } from "antd";
import { useState } from "react";
import HeaderButton from "./HeaderButton";
import HeaderList from "./HeaderList";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import Result from "../SearchBar/Result";
import Cart from '../../Cart/Cart';

const HeaderScreen = () => {
    const [result, setResult] = useState(null);

    const fetchData = async (value) => {
        const { data } = await axios.get(
            `https://dummyjson.com/products/search?q=${value}&limit=8`
        );

        return data.products;
    };
    const [cartStatus, setCartStatus] = useState(false);
    const cart = (
        <div class="flex justify-end">
            <div
                class="w-screen max-w-sm p-8 pt-4 bg-gray-100 border border-gray-600 z-10 fixed "
                aria-modal="true"
                role="dialog"
                tabindex="-1"
            >
                <button
                    class="relative block ml-auto -mr-4 text-gray-600 transition hover:scale-110"
                    onClick={() => setCartStatus(false)}
                >
                    <span class="sr-only">Close cart</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div class="mt-6 space-y-6">
                    <ul class="space-y-4 max-h-64 overflow-x-hidden">
                        <li class="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                alt=""
                                class="object-cover w-16 h-16 rounded"
                            />

                            <div class="ml-4">
                                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt class="inline">Size:</dt>
                                        <dd class="inline">XXS</dd>
                                    </div>

                                    <div>
                                        <dt class="inline">Color:</dt>
                                        <dd class="inline">White</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="flex items-center justify-end flex-1 gap-2">
                                <form>
                                    <label for="Line2Qty" class="sr-only">
                                        {" "}
                                        Quantity{" "}
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        id="Line2Qty"
                                        class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </form>

                                <button class="text-gray-600 transition hover:text-red-600">
                                    <span class="sr-only">Remove item</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-4 h-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>

                        <li class="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                alt=""
                                class="object-cover w-16 h-16 rounded"
                            />

                            <div class="ml-4">
                                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt class="inline">Size:</dt>
                                        <dd class="inline">XXS</dd>
                                    </div>

                                    <div>
                                        <dt class="inline">Color:</dt>
                                        <dd class="inline">White</dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="flex items-center justify-end flex-1 gap-2">
                                <form>
                                    <label for="Line3Qty" class="sr-only">
                                        {" "}
                                        Quantity{" "}
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        value="1"
                                        id="Line3Qty"
                                        class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </form>

                                <button class="text-gray-600 transition hover:text-red-600">
                                    <span class="sr-only">Remove item</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-4 h-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>


                    <div class="space-y-4 text-center flex flex-col">
                        <a
                            href="#"
                            class="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400"
                        >
                            View my cart (2)
                        </a>

                        <Button
                            className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600 mb-10"
                            onClick={() => setCartStatus(false)}
                        >
                            Continue shopping
                        </Button>


                        <Link class="no-underline border " to="../checkout">Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <header aria-label="Site Header" className="bg-[#f76402]">
                <div className="mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-teal-600" href="/">
                        <span className="sr-only">Home</span>
                        <svg
                            className="h-8"
                            viewBox="0 0 28 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="white"
                            />
                        </svg>
                    </a>

                    <div className="items-center flex flex-1">
                        <nav aria-label="Site Nav" className="hidden md:block flex pr-2">
                            <ul className="flex items-center gap-6 text-sm">
                                <HeaderList href="/">Home</HeaderList>
                                <HeaderList><Link to="/clothes">Shop</Link></HeaderList>
                                <HeaderList><Link to="/aboutus">About Us</Link></HeaderList>
                                <HeaderList>Contact</HeaderList>
                                <HeaderList><Link to="/checkout">My Orders</Link></HeaderList>
                                <HeaderList>Help</HeaderList>
                            </ul>
                        </nav>

                        <SearchBar
                            fetchData={fetchData}
                            setResult={setResult}
                            suggestionKey="title"
                        />
                        {result && <Result {...result} />}
                        {/* <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              </div>
              <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required></input>
            </div>
            <button type="submit" class="relative p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search</span>
            </button> */}

                        <div className="flex items-center gap-4 flex flex-1 justify-end">
                            <div
                                className="cursor-pointer text-white"
                                onClick={() => setCartStatus(!cartStatus)}
                            >
                                <iconify-icon
                                    icon="material-symbols:garden-cart"
                                    width="30"
                                    height="30"
                                ></iconify-icon>
                            </div>
                            <HeaderButton><Link to="/login">Login</Link></HeaderButton>
                            <HeaderButton><Link to="/register">Register</Link></HeaderButton>

                        </div>
                    </div>
                </div>
            </header>
            {cartStatus ? cart : null}
        </>
    );
};

export default HeaderScreen;