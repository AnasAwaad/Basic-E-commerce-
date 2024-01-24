import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces";
import "./details.css";

const Details = () => {
  const params = useParams();
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const [product, setProduct] = useState<IProduct>({
    category: "",
    description: "",
    id: 1,
    image: "",
    price: "",
    rating: { count: 1, rate: 1 },
    title: "",
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.productId)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <>
      <div className="card mb-3">
        <img src={product.image} className="card-img" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              price : {product.price}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};
export default Details;
