import { createContext, useContext } from "react";
export const Context = createContext<null | undefined>(undefined);
export function useAppContext() {
  const context = useContext(Context);
  if (context == undefined)
    throw new Error("Context used outside it's provider");
  return context;
}
