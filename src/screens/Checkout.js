const Checkout = () => {
  return (
    <>
      <section>
        <h1 class="sr-only">Checkout</h1>

        <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div class="py-12 bg-gray-50 md:py-24">
            <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div class="flex items-center ">
                <a className="block text-teal-600" href="/">
                  <svg
                    class="h-8"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="#f76402"
                    ></path>
                  </svg>

                  <h2 class=" font-medium text-gray-900">Return to front page</h2>
                </a>
              </div>

              <div>
                <p class="text-2xl font-medium tracking-tight text-gray-900">
                  $99.99
                </p>

                <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div>

              <div>
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-100">
                    <li class="flex items-center py-4">
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
                    </li>

                    <li class="flex items-center py-4">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-[#fef1e8] md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    for="LastName"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Phone"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Card Details
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="CardNumber" class="sr-only">
                        {" "}
                        Card Number{" "}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Card Number"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div class="flex -space-x-px">
                      <div class="flex-1">
                        <label for="CardExpiry" class="sr-only">
                          {" "}
                          Card Expiry{" "}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Expiry Date"
                          class="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                        />
                      </div>

                      <div class="flex-1">
                        <label for="CardCVC" class="sr-only">
                          {" "}
                          Card CVC{" "}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          class="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Billing Address
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="Country" class="sr-only">
                        Country
                      </label>

                      <select
                        id="Country"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                      >
                        <option>Ha Noi</option>
                      </select>
                    </div>

                    <div>
                      <label class="sr-only" for="PostalCode">
                        {" "}
                        Address{" "}
                      </label>

                      <input
                        type="text"
                        id="PostalCode"
                        placeholder="Address"
                        class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </fieldset>

                <div class="col-span-6">
                  <button class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
