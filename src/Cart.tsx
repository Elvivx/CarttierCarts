// import PropTypes from "prop-types"
import CartItems from "./CartItems";
const Cart: React.FC<Cart> = ({ checkoutToggle, itemDescToggle }) => {
  return (
    <>
      <section className="cart contents">
        <h1>Cart</h1>
        <hr />
        <CartItems toggle={itemDescToggle} />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <button onClick={checkoutToggle}>Checkout</button>
      </section>
    </>
  );
};
interface Cart {
  checkoutToggle: () => void;
  itemDescToggle: () => void;
}
export default Cart;
