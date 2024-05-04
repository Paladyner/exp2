import CategoryListDetail from "./CategoryListDetail";

const CategoryList = ({ data }) => {
  return (
    <>
      <li className="item" style={{ padding: "0px", width: "10%" }}>
        <div className="home-category-list">
          <div className="group">
            {data?.map((item, index) => (
              <CategoryListDetail key={index} img={item.imgurl} route={item.id}>
                {item.name}
              </CategoryListDetail>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default CategoryList;
