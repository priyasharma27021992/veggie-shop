import { Children, createContext } from "react";

const CartContext = createContext({
  items: [],
});

const CartProvider = ({ children }) => {
  const items = [];
  return <CartContext.Provider value={items}>{children}</CartContext.Provider>;
};
