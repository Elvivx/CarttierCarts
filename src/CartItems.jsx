import img from "./assets/imgs/edwin-chen-_ju6ZXbNKvY-unsplash.jpg"
import Stars from "./Stars"
function CartItems() {
  return (
    <>
      <div className='cartItem'>
        <div className='img'>
          <img src={img} alt='#' />
        </div>
        <h2 className='itemName'>Earbuds Pro Max</h2>
        <div className='rating'>
          <span className='stars'>
            <Stars rating={4} />
          </span>
          <span className='rateNum'>(121)</span>
        </div>
        <div className='amount'>
          <small>$</small>
          <span>89</span>
          <small>.00</small>
        </div>
      </div>
    </>
  )
}
export default CartItems
