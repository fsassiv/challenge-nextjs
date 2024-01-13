"use client";

import { useProductsContext } from "@/context/Product";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Product } from "./Product";

export const Products = () => {
  const searchParams = useSearchParams();

  const { products } = useProductsContext();

  const filteredList = useCallback(() => {
    const term = searchParams.get("search") || "";
    const tempFiltered = products.filter((item) =>
      item.name.toLowerCase().includes(term?.toLowerCase())
    );
    return tempFiltered.slice(0, 6);
  }, [products, searchParams]);

  return (
    <ul className="grid grid-cols-3 mt-4 gap-4">
      {filteredList().map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </ul>
  );
};
