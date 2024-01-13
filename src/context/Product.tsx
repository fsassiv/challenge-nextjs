"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ProductsProviderPropTypes {
  children: ReactNode;
}

interface ProductsContextTypes {
  products: ProductTypes[];
  addProduct: (data: ProductTypes) => void;
}

const ProductsContext = createContext<ProductsContextTypes>({
  products: [],
  addProduct: () => {},
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

  const addProduct = (data: ProductTypes) => {
    setProducts((cur) => [...cur, data]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
