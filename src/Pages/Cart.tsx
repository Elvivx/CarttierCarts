import { NavLink } from "react-router-dom";
import CartItems from "./CartItems";
const Cart = () => {
  return (
    <>
      <section className="cart contents">
        <h1>Cart</h1>
        <hr />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <NavLink to="/checkout">
          <button>To Checkout</button>
        </NavLink>
      </section>
    </>
  );
};

export default Cart;
