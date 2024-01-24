import "./Carousel.css";
function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-best-practices-.jpg"
              className="d-block w-100 height-700"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/01/25181555/eCommerce-Cartoon.png"
              className="d-block w-100 height-700"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
              className="d-block w-100 height-700"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
