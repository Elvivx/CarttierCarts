import { useAppContext } from "../Context/Context";
import CartItems from "./CartItems";
const Cart = () => {
  const { checkoutToggle, itemDescToggle } = useAppContext();
  return (
    <>
      <section className="cart contents">
        <h1>Cart</h1>
        <hr />
        <CartItems toggle={itemDescToggle} />
        {/* <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems /> */}
        <button onClick={checkoutToggle}>Checkout</button>
      </section>
    </>
  );
};

export default Cart;
