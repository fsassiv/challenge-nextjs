"use client";

import { ProductTypes } from "@/context/Product";
import { FC } from "react";
import { MdClose } from "react-icons/md";
import { Button } from "../ui/button";

interface CartItemPropTypes extends ProductTypes {
  handleRemoveFromCart: () => void;
  qnt: number;
}

export const CartItem: FC<CartItemPropTypes> = ({
  name,
  price,
  handleRemoveFromCart,
  qnt,
}) => {
  return (
    <li className="flex flex-col items-start mb-2 p-2 rounded bg-gray-100 relative">
      <h6 className="text-base font-bold">{`${name} - x${qnt}`}</h6>
      <p className="text-sm">Preço Und: R$ {price.toFixed(2)}</p>
      <p className="text-sm">Subtotal: R$ {(price * qnt).toFixed(2)}</p>
      <Button
        variant="ghost"
        title="Remover do carrinho"
        className="absolute top-1 right-1"
        onClick={handleRemoveFromCart}
      >
        <MdClose size={20} />
      </Button>
    </li>
  );
};
