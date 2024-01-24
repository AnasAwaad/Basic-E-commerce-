import { useEffect, useState } from "react";

interface IProps {
  setProductsList: (ele: []) => void;
}
const Categories = (props: IProps) => {
  console.log(props);
  const api_url = "https://fakestoreapi.com/products";

  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getspecificCategory = (category: string) => {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((json) => props.setProductsList(json));
  };

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => props.setProductsList(data));
  };
  const listAllCategories = categories.map((item) => {
    return (
      <>
        <button
          key={item}
          className="btn btn-info me-3 mb-3"
          onClick={() => getspecificCategory(item)}
        >
          {item}
        </button>
      </>
    );
  });

  return (
    <div>
      <button className="btn btn-success me-3 mb-4 " onClick={getProducts}>
        All Products
      </button>
      <br />
      {listAllCategories}
    </div>
  );
};
export default Categories;
