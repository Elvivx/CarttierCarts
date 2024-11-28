function Checkout() {
  const submit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className='checkout contents'>
        <div className='checkoutContent'>
          <div className='review-delivery'>
            <div className='review'>
              <h1>Review Items And Summary</h1>
              <Review />
            </div>
            <div className='deliver'>
              <div className='top'>
                <h1>Delivery Information</h1>
                <button>Edit Information</button>
              </div>
              <form onSubmit={submit}>
                <label htmlFor=''>Name</label>
                <input type='text' placeholder='Onuoha Elvis' />
                <label htmlFor=''>Address</label>
                <input type='text' placeholder='24, Apomu Street ' />
                <label htmlFor=''>City</label>
                <input type='text' placeholder='Ijegun, Ikotun' />
                <label htmlFor=''>Postal Code</label>
                <input type='text' placeholder='102213' />
                <label htmlFor=''>Mobile</label>
                <input type='text' placeholder='09063763861' />
                <label htmlFor=''>Email</label>
                <input type='text' placeholder='Elvisonuoha@gmail.com' />
              </form>
            </div>
          </div>
          <div className='summary'>
            <h1>OrderSummary</h1>
            <div className='coupon'>
              <input type='text' placeholder='Enter Coupon' />
              <button>Apply Coupon</button>
            </div>
            <hr />
            <h1>Payment Details</h1>
            <hr />
            <div className='payMethods'>
              <label htmlFor=''>
                <input type='radio' name='' id='' />
                Cash on Delivery
              </label>
              <label htmlFor=''>
                <input type='radio' name='' id='' />
                Crypto Currency
              </label>
              <label htmlFor=''>
                <input type='radio' name='' id='' />
                Paypal
              </label>
              <label htmlFor=''>
                <input type='radio' name='' id='' />
                Credit or Debit Card
              </label>
            </div>

            <div className='cards'>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>
            </div>

            <form action=''>
              <label htmlFor=''>Email</label>
              <input type='text' />
              <label htmlFor=''>Card Holder Name</label>
              <input type='text' />
              <label htmlFor=''>Card Number</label>
              <input type='text' />
              <label htmlFor=''>CCV</label>
              <input type='text' />

              <button>Checkout</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
const Review = () => {
  return (
    <div className='reviewItem'>
      <div className='left'>
        <div className='img'>
          <img src='#' alt='#' />
        </div>
        <p>Airpods-Max Pro</p>
      </div>
      <div className='amount'>
        <p>$549.00</p>
        <span>
          Quantity: <span className='quantity'>1</span>
        </span>
      </div>
    </div>
  )
}
export default Checkout
