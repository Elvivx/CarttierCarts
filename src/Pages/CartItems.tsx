import { NavLink } from "react-router-dom";
import Stars from "./Stars";
import { useAppContext } from "../Context/Context";

const CartItems = ({ item }) => {
  const { img, name, price, rating, rateNum } = item;
  const { cart } = useAppContext();
  console.log(cart);
  return (
    <>
      <NavLink to={`/item/${name}`}>
        <div className="cartItem">
          <div className="img">
            <img src={img} alt="#" />
          </div>
          <h2 className="itemName">{name}</h2>
          <div className="rating">
            <span className="stars">
              <Stars rating={rating} />
            </span>
            <span className="rateNum">({rateNum})</span>
          </div>
          <div className="amount">
            <small>$</small>
            <span>{price}</span>
            <small>.00</small>
          </div>
        </div>
      </NavLink>
    </>
  );
};
interface CartItems {
  toggle: () => void;
  itemInfo: {
    img: string;
    name: string;
    desc: string;
    price: number;
    rating: number;
    rateNum: number;
  };
}
export default CartItems;
