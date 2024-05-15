import React from "react";
import CarouselProps from "./component/Carousel";
import List from "../product/List";
import product from "../../../models/Product";

interface homePageProps {
  product: product[];
  setProduct:(prod:product[]) => void;
}
const HomePage: React.FC<homePageProps> = ({product,setProduct}) => {
  return (
    <div>
      <div className="py-3 bg-dark bg-pattern mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center text-white">
                <span className="heading-xxs letter-spacing-xl">
                  ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselProps />
      <List product={product} setProduct={setProduct}/>
    </div>
  );
};
export default HomePage;
