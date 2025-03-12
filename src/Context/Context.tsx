import { createContext, useContext } from "react";

interface AppContextProps {
  cart: [];
  addToCart: (item: object) => void;
  items: {
    id: number;
    img: string;
    name: string;
    desc: string;
    rating: number;
    rateNum: number;
    price: number;
  };
}

export const Context = createContext<AppContextProps | undefined>(undefined);

export function useAppContext() {
  const context = useContext(Context);
  if (context == undefined)
    throw new Error("Context used outside it's provider");
  return context;
}
