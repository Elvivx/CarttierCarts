import ShoppingItem from "./ShoppingItem"
function Shop() {
  return (
    <>
      <div className='shopItems'>
        <h2 className='title'>Headphones For You!</h2>
        <div className='items'>
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
        </div>
      </div>
    </>
  )
}
export default Shop
