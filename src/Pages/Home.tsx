import img from "../assets/imgs/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import Shop from "./Shop";
const Home: React.FC = () => {
  return (
    <>
      <div className="hero">
        <img src={img} alt="#" />
        <div className="hero-content">
          <h1>Grab Upto 50% Off On</h1>
          <h1>Selected Items.</h1>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="shop">
        <div className="shop-nav">
          <div className="shopNavOptions">
            <span className="navBtn">
              <select name="" id="">
                <option value="">Type</option>
              </select>
            </span>
            <span className="navBtn">
              <select name="" id="">
                <option value="">Price</option>
              </select>
            </span>
            <span className="navBtn">
              <select name="" id="">
                <option value="">Review</option>
              </select>
            </span>
            <span className="navBtn">
              <select name="" id="">
                <option value="">Color</option>
              </select>
            </span>
            <span className="navBtn">
              <select name="" id="">
                <option value="">Material</option>
              </select>
            </span>
            <span className="navBtn">
              <select name="" id="">
                <option value="">Offers</option>
              </select>
            </span>
            <span className="navBtn">
              Filter
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
              >
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                  <path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z" />
                  <path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
                  <path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
                  <path d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z" />
                  <path d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z" />
                  <path d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z" />
                  <path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z" />
                  <path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                </g>
              </svg>
            </span>
            <div className="sort">
              <select name="" id="">
                <option value="">Sort</option>
              </select>
            </div>
          </div>
        </div>

        <Shop />
      </div>
    </>
  );
};

export default Home;
