"use client";
import { toast } from "@/components/ui/use-toast";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProductsProviderPropTypes {
  children: ReactNode;
}

interface ProductsContextTypes {
  products: ProductTypes[];
  addProduct: (data: ProductTypes) => void;
  cart: ProductTypes[];
  addToCart: (data: ProductTypes) => void;
  removeFromCart: (data: string) => void;
  cartAmount: number;
}

const ProductsContext = createContext<ProductsContextTypes>({
  products: [],
  addProduct: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartAmount: 0,
});

export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  description: string;
}
export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }: ProductsProviderPropTypes) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [cart, setCart] = useState<ProductTypes[]>([]);
  const [cartAmount, setCartAmount] = useState(0);

  const addProduct = (data: ProductTypes) => {
    setProducts((cur) => [...cur, data]);
  };

  const addToCart = (data: ProductTypes) => {
    setCart((cur) => [...cur, data]);
    toast({
      title: "Carrinho",
      description: `${data.name} adicionada(o) ao carrinho`,
    });
  };

  const removeFromCart = (id: string) => {
    const temp = products.filter((item) => item.id !== id);
    setCart(temp);
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    setCartAmount(sum);
  }, [cart]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        cart,
        addToCart,
        removeFromCart,
        cartAmount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
