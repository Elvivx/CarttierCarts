import { NavLink } from "react-router-dom"
import CartItems from "./CartItems"
import { useAppContext } from "../Context/Context"
import { useEffect, useState } from "react"
const Cart = () => {
  const { cart } = useAppContext()
  const [Total, setTotal] = useState(0)
  interface Item {
    id: number
    img: string
    name: string
    price: number
    rating: number
    rateNum: number
    quantity: number
  }
  const Items = () => {
    if (cart.length === 0) {
      return <h1>Cart is empty</h1>
    } else {
      return cart.map((item: Item) => <CartItems item={item} key={item.id} />)
    }
  }

  useEffect(() => {
    const total = cart.reduce((acc: number, item: Item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotal(total)
  }, [cart])
  return (
    <>
      <section className="cart contents">
        <h1>Cart</h1>
        <hr />
        <Items />
        <div className="total">
          <h1 className="text-9xl">Total</h1>
          <h2>${Total}.00</h2>
        </div>
        <NavLink to="/checkout">
          <button>Proceed To Checkout</button>
        </NavLink>
      </section>
    </>
  )
}

export default Cart
