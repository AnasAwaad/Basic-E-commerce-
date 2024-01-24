import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Carousel from "./components/Carousel";
import Products from "./components/product";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Products />
            </>
          }
        />
        <Route path="details/:productId" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
