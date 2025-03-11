import { useState } from "react";
import { Context } from "./Context";
const AppContext: React.FC<AppContext> = ({ children }) => {
  const [cart, setCart] = useState<string[]>();
  //   const itemDescToggle = () => {
  //     console.log("work");
  //     setDisplayCart(false);
  //     setDisplayCheckout(false);
  //     setDisplayHero(false);
  //     setDisplayItemDesc(true);
  //   };
  const navToggle = () => {
    const navs = document.querySelector(".nav");
    navs.classList.toggle("showNav");
  };
  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.parentElement.parentElement.parentElement);
    setCart([
      ...cart,
      e.currentTarget.parentElement.parentElement.parentElement,
    ]);
  };
  const addFav = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget);
    // setFav([...fav, e.currentTarget.parentElement.parentElement.parentElement])
    setFav(!fav);
  };
  const state = {
    cart,
    addToCart,
    addFav,
    navToggle,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
interface AppContext {
  children: React.ReactNode;
}
export default AppContext;
