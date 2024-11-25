import ShoppingItem from "./ShoppingItem"
function Shop({ addToCart, itemDescToggle, addFav }) {
  return (
    <>
      <div className='shopItems'>
        <h2 className='title'>Headphones For You!</h2>
        <div className='items'>
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} addFav={addFav} />
        </div>
      </div>
    </>
  )
}
export default Shop
