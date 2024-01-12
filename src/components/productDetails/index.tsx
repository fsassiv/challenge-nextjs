"use client";

import { ProductTypes, useProductsContext } from "@/context/Product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
  const params = useParams();

  const { products } = useProductsContext();

  const [product, setProduct] = useState<ProductTypes | undefined | null>(null);

  useEffect(() => {
    setProduct(products.find((item) => item?.id === params?.productId));
  }, [params, products]);

  return (
    <div className="mx-20">
      <p className="flex items-end">
        produto:&nbsp;
        <h3 className="text-3xl italic font-bold">{product?.name}</h3>
      </p>
      <p className="flex items-end">
        descrição:&nbsp;
        <h3 className="text-xl italic font-bold">{product?.description}</h3>
      </p>
      <p className="flex items-end">
        preço:&nbsp;
        <h3 className="text-xl italic font-bold">R$: {product?.price}</h3>
      </p>
    </div>
  );
};
