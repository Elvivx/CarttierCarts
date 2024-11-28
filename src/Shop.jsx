import PropTypes from "prop-types"
import ShoppingItem from "./ShoppingItem"
function Shop({ addToCart, itemDescToggle, fav, addFav }) {
  return (
    <>
      <div className='shopItems'>
        <h2 className='title'>Headphones For You!</h2>
        <div className='items'>
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
          <ShoppingItem addToCart={addToCart} itemInfo={itemDescToggle} fav={fav} addFav={addFav} />
        </div>
      </div>
    </>
  )
}
Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
  itemDescToggle: PropTypes.func.isRequired,
  fav: PropTypes.bool,
  addFav: PropTypes.func.isRequired,
}
export default Shop
