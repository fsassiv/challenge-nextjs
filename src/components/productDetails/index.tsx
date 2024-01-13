"use client";

import { ProductTypes, useProductsContext } from "@/context/Product";
import { formatCurrency } from "@/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
  const params = useParams();
  const { push } = useRouter();
  const { products } = useProductsContext();

  const [product, setProduct] = useState<ProductTypes | undefined | null>(null);

  useEffect(() => {
    const tempProduct = products.find((item) => item?.id === params?.productId);
    if (tempProduct) {
      setProduct(tempProduct);
      return;
    }
    push("/products");
  }, [params, products, push]);

  return (
    <div className="mx-20">
      {product ? (
        <>
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
            <h3 className="text-xl italic font-bold">
              {formatCurrency(product?.price)}
            </h3>
          </p>
        </>
      ) : (
        <h3 className="font-bold text-lg">
          Buscando informações do produto...
        </h3>
      )}
    </div>
  );
};
