// import PropTypes from "prop-types"
import ShoppingItem from "./ShoppingItem";
const Shop: React.FC<Shop> = ({ addToCart, itemDescToggle, fav, addFav }) => {
  return (
    <>
      <div className="shopItems">
        <h2 className="title">Headphones For You!</h2>
        <div className="items">
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
          <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
          />
        </div>
      </div>
    </>
  );
};
interface Shop {
  addToCart: () => void;
  itemDescToggle: () => void;
  fav: boolean;
  addFav: () => void;
}
export default Shop;
