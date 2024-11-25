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
export default Cart
