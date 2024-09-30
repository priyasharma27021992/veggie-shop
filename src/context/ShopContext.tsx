import { createContext } from "react";
import { useShopping } from "../api/hooks/useShopping";

export const ShoppingContext = createContext({
  items: [],
});

export const ShoppingProvider = ({ children }) => {
  const { items } = useShopping();
  return (
    <ShoppingContext.Provider value={items}>
      {children}
    </ShoppingContext.Provider>
  );
};
