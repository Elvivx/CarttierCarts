import { NavLink } from "react-router-dom";
import CartItems from "./CartItems";
import { useAppContext } from "../Context/Context";
const Cart = () => {
  const { cart } = useAppContext();

  const Items = () => {
    if (cart.length === 0) {
      return <h1>Cart is empty</h1>;
    } else {
      return cart.map((item: object[]) => (
        <CartItems item={item} key={item.id} />
      ));
    }
  };
  return (
    <>
      <section className="cart contents">
        <h1>Cart</h1>
        <hr />
        <Items />
        {/* <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems /> */}
        <NavLink to="/checkout">
          <button>To Checkout</button>
        </NavLink>
      </section>
    </>
  );
};

export default Cart;
