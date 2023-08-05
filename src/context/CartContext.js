import React, { createContext, useState, useMemo, useCallback } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = useCallback(
    (item, quantity = 1) => {
      const isInCart = cart.some((prod) => prod.id === item.id);

      if (isInCart) {
        const updatedCart = cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
        setCart(updatedCart);
      } else {
        setCart((prev) => [...prev, { ...item, quantity }]);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    (itemId) => {
      const itemToRemove = cart.find((prod) => prod.id === itemId);

      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          const updatedCart = cart.filter((prod) => prod.id !== itemId);
          setCart(updatedCart);
        } else {
          const updatedCart = cart.map((prod) =>
            prod.id === itemId ? { ...prod, quantity: prod.quantity - 1 } : prod
          );
          setCart(updatedCart);
        }
      }
    },
    [cart]
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const memoizedContextValue = useMemo(
    () => ({ cart, addItem, removeItem, clearCart, totalQuantity }),
    [cart, addItem, removeItem, clearCart, totalQuantity]
  );

  return (
    <CartContext.Provider value={memoizedContextValue}>
      {children}
    </CartContext.Provider>
  );
};
