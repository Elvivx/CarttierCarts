import { createContext, useContext } from "react";

interface AppContextProps {
  cart: [];
  addToCart: (item: object) => void;
  items: Item[];
}

interface Item {
  id: number;
  img: string;
  name: string;
  desc: string;
  rating: number;
  rateNum: number;
  price: number;
  quantity: number;
  TotalQuantity: number;
}

export const Context = createContext<AppContextProps>({
  cart: [],
  addToCart: () => {},
  items: [],
});

export function useAppContext() {
  const context = useContext(Context);
  if (context == undefined)
    throw new Error("Context used outside it's provider");
  return context;
}
