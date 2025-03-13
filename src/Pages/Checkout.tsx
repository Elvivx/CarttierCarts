import { useEffect, useState } from "react"
import { useAppContext } from "../Context/Context"
import { Link } from "react-router-dom"

function Checkout() {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const {
    cart,
  }: {
    cart: {
      id: number
      name: string
      price: number
      quantity: number
      img: string
    }[]
  } = useAppContext()
  const [Total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotal(total)
  }, [cart])
  console.log(cart)
  return (
    <>
      <section className="checkout contents">
        <div className="checkoutContent">
          <div className="review-delivery">
            <div className="review">
              <h1>Review Items And Summary</h1>
              {cart.map(
                (item: {
                  id: number
                  name: string
                  price: number
                  quantity: number
                }) => (
                  <Review key={item.id} item={item} />
                )
              )}
              <div className="total">
                <h1 className="text-3xl text-green-500">Total</h1>
                <h2>${Total}.00</h2>
                <button>Proceed to Checkout</button>
              </div>
            </div>
            <div className="deliver">
              <div className="top">
                <h1>Delivery Information</h1>
                <button>Edit Information</button>
              </div>
              <form onSubmit={submit}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Onuoha Elvis" />
                <label htmlFor="">Address</label>
                <input type="text" placeholder="24, Apomu Street " />
                <label htmlFor="">City</label>
                <input type="text" placeholder="Ijegun, Ikotun" />
                <label htmlFor="">Postal Code</label>
                <input type="text" placeholder="102213" />
                <label htmlFor="">Mobile</label>
                <input type="text" placeholder="09063763861" />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Elvisonuoha@gmail.com" />
              </form>
            </div>
          </div>
          <div className="summary">
            <h1>OrderSummary</h1>
            <div className="coupon">
              <input type="text" placeholder="Enter Coupon" />
              <button>Apply Coupon</button>
            </div>
            <hr />
            <h1>Payment Details</h1>
            <hr />
            <div className="payMethods">
              <label htmlFor="">
                <input type="radio" name="" id="" />
                Cash on Delivery
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                Crypto Currency
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                Paypal
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                Credit or Debit Card
              </label>
            </div>

            <div className="cards">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>

            <form action="">
              <label htmlFor="">Email</label>
              <input type="text" />
              <label htmlFor="">Card Holder Name</label>
              <input type="text" />
              <label htmlFor="">Card Number</label>
              <input type="text" />
              <label htmlFor="">CCV</label>
              <input type="text" />

              <button>Checkout</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
interface ReviewItem {
  id: number
  img?: string
  name: string
  price: number
  quantity: number
}

const Review = ({ item }: { item: ReviewItem }) => {
  return (
    <Link to={`/item?${item.name}&id=${item.id}`}>
      <div className="reviewItem">
        <div className="left">
          <div className="img">
            <img src={item.img} alt="#" />
          </div>
          <p>{item.name}</p>
        </div>
        <div className="amount">
          <p>${item.price * item.quantity}.00</p>
          <span>
            Quantity: <span className="quantity">{item.quantity}</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
export default Checkout
