"use client";
import { toast } from "@/components/ui/use-toast";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductTypes } from "./Product";

interface CartProviderPropTypes {
  children: ReactNode;
}

interface CartContextTypes {
  cart: ProductTypes[];
  addToCart: (data: ProductTypes) => void;
  removeFromCart: (data: string) => void;
  cartAmount: number;
}

const CartContext = createContext<CartContextTypes>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartAmount: 0,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: CartProviderPropTypes) => {
  const [cart, setCart] = useState<ProductTypes[]>([]);
  const [cartAmount, setCartAmount] = useState(0);

  const addToCart = (data: ProductTypes) => {
    setCart((cur) => [...cur, data]);
    toast({
      title: "Carrinho",
      description: `${data.name} adicionada(o) ao carrinho`,
    });
  };

  const removeFromCart = (id: string) => {
    const temp = cart.filter((item) => item.id !== id);
    setCart(temp);
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    setCartAmount(sum);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
