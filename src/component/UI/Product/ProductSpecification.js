const ProductSpecification = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold sm:text-2xl bg-[#dbd0d04b] p-2">
        Product Specifications
      </h2>
      <div className="mt-[40px]">
        <div className="flex p-1">
          <p className="w-[150px]">Category</p>
          <p>
            Link {">"} Cloth {">"} T-shirt
          </p>
        </div>
        <div className="flex p-1">
          <p className="w-[150px]">Ships From</p>
          <p>Hà Nội</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
