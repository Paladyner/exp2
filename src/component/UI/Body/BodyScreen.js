import MainScreen from "../../../screens/maincreen";
import Product from "../Product/Product";
import Banner from "../Reuseable/Banner";
import "./BodyScreen.scss";



const BodyScreen = () => {
  return (
    <MainScreen>
      <div className="home-page">
        <Banner />
        {/* <div className="main">
          <div className="section-below-the-fold">
            <div className="section-category-list">
              <div className="home-category-list">
                <div className="shopee-header-section ">
                  <div className="header">
                    <div className="title">Categories</div>
                  </div>
                  <div className="content">
                    <Category />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
        <Product />
      </div>
    </MainScreen>
  );
};

export default BodyScreen;
