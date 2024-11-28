import PropTypes from "prop-types"
import CartItems from "./CartItems"
function Cart({ checkoutToggle, itemDescToggle }) {
  return (
    <>
      <section className='cart contents'>
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
  )
}
Cart.propTypes = {
  checkoutToggle: PropTypes.func.isRequired,
  itemDescToggle: PropTypes.func.isRequired,
}
export default Cart
