import React, { useState } from "react";
import product from "../../models/Product";
import Furniture from "./component/Furniture";
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
  new product(
    "6",
    "Sofa ONA HIM 1 chỗ da nâu S3",
    ["Armchair", "Sofa "],
    200000,
    30000,
    [
      "assets/img/products/sofa5_1.jpg",
      "assets/img/products/sofa5_2.jpg",
    ],
    4
  ),
  new product(
    "7",
    "Sofa Bolero 3 chỗ + Đôn M3 vải xám MB4010",
    ["Phòng khách", "Sofa"],
    350000,
    40000,
    [
      "assets/img/products/sofa3_1.jpg",
      "assets/img/products/sofa3_2.jpg",
    ],
    3
  ),
  new product(
    "8",
    "bàn nước bar 200x75 75167k",
    ["Bàn nước", "Phòng khách "],
    200000,
    30000,
    [
      "assets/img/products/table3_1.jpg",
      "assets/img/products/table3_2.jpg",
    ],
    1
  ),
  // Thêm các sản phẩm khác ở đây nếu cần
];
interface ListProps {
  product: product[];
  setProduct: (prod: product[]) => void;
}
const List: React.FC<ListProps> = ({ product, setProduct }) => {
  const [data,setData] = useState<product[]>([])
  return (
    <div>
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-4 text-center">Top Sellers</h2>

              <div className="nav justify-content-center mb-10">
                <a
                  className="nav-link active"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Women
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Men
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Kids
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row"></div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
            <Furniture key={product.id} data={[]} product={product} setProduct={setProduct} />
            ))}
            <div className="col-12">
              <div className="mt-7 text-center">
                <a className="link-underline" href="#!">
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
