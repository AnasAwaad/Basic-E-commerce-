import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces";
import "./product.css";
import Categories from "./Categories";
const Products = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProductsList(data));
  }

  const drowProducts = productsList.map((product) => {
    return (
      <div
        key={product.id}
        className="col-12 col-md-6 col-lg-4 col-xl-3 gap-3  "
      >
        <div className="card" key={product.id} style={{ width: "18rem" }}>
          <img
            src={product.image}
            className="card-img-top product-image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title.length > 40
                ? `${product.title.slice(0, 40)}...`
                : product.title}
            </h5>
            <p className="card-text">{product.description.slice(0, 100)} ...</p>
            <Link to={`details/${product.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-80">
      <Categories setProductsList={setProductsList} />
      <div className="row">{drowProducts}</div>
    </div>
  );
};
export default Products;
