import { useState } from "react";
import { Context } from "./Context";
const AppContext: React.FC<AppContext> = ({ children }) => {
  const [cart, setCart] = useState<string[]>();

  const state = {
    cart,
    setCart,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
interface AppContext {
  children: React.ReactNode;
}
export default AppContext;
