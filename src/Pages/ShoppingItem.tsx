// import PropTypes from "prop-types"
import { useState } from "react";
import img from "../assets/imgs/photo-1593487568720-92097fb460fb.jpeg";
import Stars from "./Stars";
import { NavLink } from "react-router-dom";
const ShoppingItem: React.FC<ShoppingItem> = () => {
  // const {
  //   addToCart,
  //   itemInfo,
  //   // fav,
  //   addFav,
  // } = props;
  const [fav, setfav] = useState<boolean>(false);
  const addFav = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget);
    // setFav([...fav, e.currentTarget.parentElement.parentElement.parentElement])
    setfav(!fav);
  };
  return (
    <>
      <NavLink to="/item">
        <div className="item">
          <div className="img">
            <img src={img} alt="itemImage" />
            <span className="fav" onClick={addFav}>
              {fav ? (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22c8-4 11-9 11-14a6 6 0 0 0-11-3.314A6 6 0 0 0 1 8c0 5 3 10 11 14Z"
                    fill="#0de045"
                    className="fill-232323"
                  ></path>
                </svg>
              ) : (
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1026543,2.69607267 C14.1723908,2.17246378 15.1055573,1.99999846 16.5532309,2.0000161 C20.2579495,2.01535832 23,5.13984465 23,9.11987614 C23,12.1577519 21.3061684,15.0922806 18.1511601,17.9298912 C16.4951061,19.4193443 14.3806781,20.8933233 12.866397,21.6774721 L12,22.1261233 L11.133603,21.6774721 C9.6193219,20.8933233 7.50489394,19.4193443 5.84883985,17.9298912 C2.69383159,15.0922806 1,12.1577519 1,9.11987614 C1,5.09726693 3.71643647,2 7.45454545,2 C8.85027925,2 9.83131847,2.18877527 10.9218108,2.72813403 C11.3014787,2.91591822 11.658192,3.13866136 11.9899709,3.39576047 C12.3350403,3.12339226 12.7066025,2.88992996 13.1026543,2.69607267 Z M16.8137247,16.4428585 C19.5861779,13.9493174 21,11.4998994 21,9.11987614 C21,6.18896383 19.0882067,4.01053125 16.5490834,4.00000753 C15.3870057,4.00000023 14.7458716,4.11849292 13.9819236,4.49242603 C13.5120101,4.72243676 13.095105,5.0329512 12.7314502,5.42754949 L12.0023377,6.21870239 L11.2665312,5.43377128 C10.9108757,5.05437109 10.5000057,4.75076878 10.0351348,4.52084307 C9.24812694,4.13158808 8.56428173,4 7.45454545,4 C4.88364127,4 3,6.14771812 3,9.11987614 C3,11.4998994 4.41382212,13.9493174 7.18627532,16.4428585 C8.69781928,17.8023393 10.6410383,19.1609346 12,19.8736982 C13.3589617,19.1609346 15.3021807,17.8023393 16.8137247,16.4428585 Z"
                    fillRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </div>

          <div className="itemInfo">
            <div className="left">
              <h3 className="itemName">TWS Earbuds</h3>
              <span className="itemDesc">Full Bass.</span>
              <div className="rating">
                <span className="stars">
                  <Stars rating={4} />
                </span>
                <span className="rateNum">(121)</span>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="amount">
              <small>$</small>
              <span>89</span>
              <small>.00</small>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
interface ShoppingItem {
  addToCart: () => void;
  itemInfo: () => void;
  fav: boolean;
  addFav: () => void;
}
export default ShoppingItem;
