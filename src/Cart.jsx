import CartItems from "./CartItems"
function Cart() {
  return (
    <>
      <section className='cart contents'>
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
        <button>Checkout</button>
      </section>
    </>
  )
}
export default Cart
