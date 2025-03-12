import { useEffect, useState } from "react";
import { Context } from "./Context";
import img from "../assets/imgs/photo-1593487568720-92097fb460fb.jpeg";

const AppContext: React.FC<AppContext> = ({ children }) => {
  interface Item {
    img: string;
    name: string;
    desc: string;
    rating: number;
    rateNum: number;
    price: number;
  }

  const [cart, setCart] = useState<object[]>([]);
  //   const [fav, setFav] = useState<[]>([]);
  const items = [
    {
      img: img,
      name: "TWS Earbuds",
      desc: "Full Bass.",
      rating: 4,
      rateNum: 121,
      price: 89,
    },
    {
      img: img,
      name: "Oriamo Power Bank",
      desc: "10000mAh.",
      rating: 4,
      rateNum: 221,
      price: 189,
    },
    {
      img: img,
      name: "S25 Ultra",
      desc: "16GB Memory, 512GB Storage.",
      rating: 4,
      rateNum: 4121,
      price: 1489,
    },
    {
      img: img,
      name: "Apple Iphone 16 Pro Max",
      desc: "8GB Memory, 512GB Storage.",
      rating: 4,
      rateNum: 121,
      price: 1589,
    },
    {
      img: img,
      name: "Galaxy Earbuds 3",
      desc: "Full Bass, ANC, Touch Buttons.",
      rating: 4,
      rateNum: 735,
      price: 689,
    },
  ];
  const addToCart = (item: Item) => {
    console.log(item);
    const check = cart.filter((i) => i === item);
    // console.log(check);
    if (check.length === 0) {
      setCart([...cart, item]);
    } else {
      console.log("Item already in cart");
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const state = {
    cart,
    // fav,
    items,
    addToCart,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
interface AppContext {
  children: React.ReactNode;
  //   items: [];
  //   state: {
  //     cart: [];
  //     items: [];
  //     addToCart: (item: object) => void;
  //   };
}
export default AppContext;
