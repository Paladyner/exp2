import { Link } from "react-router-dom";

const CategoryListDetail = ({ children, img, route }) => {
  return (
    <Link className="category-grid" to={`${route}`}>
      <div className="cate-item">
        <div className="img">
          <div className="relative h-full">
            <div
              className="h-full img-style "
              style={{
                backgroundImage: ` url(${img})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="title">
          <div className="detail">{children}</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryListDetail;
