import { Form } from "react-router-dom"
import { useAppContext } from "../Context/Context"
import ShoppingItem from "./ShoppingItem"
const Shop = () => {
  const { items } = useAppContext()

  return (
    <>
      <div className="shopItems">
        <h2 className="title">Headphones For You!</h2>
        <div className="items">
          {items.map((item) => (
            <ShoppingItem itemInfo={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="bg-black text-white">
        <Form method="POST" className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input className="border-amber-50 border-2" type="text" name="name" />
          <label htmlFor="age">Age:</label>
          <input className="border-amber-50 border-2" type="text" name="age" />
          <label htmlFor="job">Job:</label>
          <input className="border-amber-50 border-2" type="text" name="job" />
          <label htmlFor="broke limit">Money:</label>
          <input
            className="border-amber-50 border-2"
            type="text"
            name="Broke limit"
          />
          <button>Amen</button>
        </Form>
      </div>
    </>
  )
}
interface Shop {
  addToCart: () => void
  itemDescToggle: () => void
  fav: boolean
  addFav: () => void
}
export default Shop
