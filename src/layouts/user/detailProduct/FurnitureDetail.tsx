import React from "react";
import { useParams } from "react-router-dom";
import Detail from "./component/Detail";
import Description from "./component/Description";
import product from "../../../models/Product";
const products: product[] = [
  new product(
    "1",
    "Bàn nước Fence",
    ["Bàn nước", "Phòng khách "],
    200000,
    30000,
    [
      "assets/img/products/table1_1.jpg",
      "assets/img/products/table1_2.jpg",
    ],
    1
  ),
  new product(
    "2",
    "Sofa Bolero 3 chỗ + Đôn M3 vải MB 40-15",
    ["Phòng khách", "Sofa"],
    350000,
    40000,
    [
      "assets/img/products/sofa2_1.jpg",
      "assets/img/products/sofa2_2.jpg",
    ],
    2
  ),
  new product(
    "3",
    "Sofa Coastal 1 chỗ vải vàng",
    ["Phòng khách", "Sofa"],
    500000,
    60000,
    [
      "assets/img/products/sofa4_1.jpg",
      "assets/img/products/sofa4_2.jpg",
    ],
    3
  ),
  new product(
    "4",
    "Nệm Sen Việt 1m8",
    ["Nệm", "Phòng ngủ"],
    500000,
    70000,
    [
      "assets/img/products/mattress1_1.jpg",
      "assets/img/products/mattress1_2.jpg",
    ],
    4
  ),
  new product(
    "5",
    "Sofa 2 chỗ Tết vải vact10499",
    ["Phòng khách", "Sofa"],
    500000,
    80000,
    [
      "assets/img/products/sofa1_1.jpg",
      "assets/img/products/sofa1_2.jpg",
    ],
    5
  ),
  // Thêm các sản phẩm khác ở đây nếu cần
];
const FurnitureDetail: React.FC = () => {
  const { productId } = useParams();
  const selectedProduct:product | undefined = products.find( (product) => product.id === productId)
  return (
    <div>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shop.html">
                    {selectedProduct?.category}
                  </a>
                </li>
                <li className="breadcrumb-item active">{selectedProduct?.name}</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {selectedProduct && <Detail product={selectedProduct}/>}
      {selectedProduct && <Description/>}
    </div>
  );
};

export default FurnitureDetail;
