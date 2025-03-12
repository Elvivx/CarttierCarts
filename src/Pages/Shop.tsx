import { useAppContext } from "../Context/Context";
import ShoppingItem from "./ShoppingItem";
const Shop = () => {
  const { items } = useAppContext();
  // console.log(items);
  return (
    <>
      <div className="shopItems">
        <h2 className="title">Headphones For You!</h2>
        <div className="items">
          {items.map((item, index) => (
            <ShoppingItem itemInfo={item} index={index} key={index} />
          ))}
          {/* <ShoppingItem
            addToCart={addToCart}
            itemInfo={itemDescToggle}
            fav={fav}
            addFav={addFav}
        <ShoppingItem
            itemInfo={items}
          />
          {/* <ShoppingItem
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
          /> */}
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
