"use client";
import { ProductTypes } from "@/context/Product";
import { formatCurrency } from "@/utils";
import { FC } from "react";
import { MdAdd, MdClose, MdOutlineRemove } from "react-icons/md";
import { Button } from "../ui/button";

interface CartItemPropTypes extends ProductTypes {
  handleRemoveFromCart: () => void;
  qnt: number;
  addToCart: () => void;
  removeUnitFromCart: () => void;
}

export const CartItem: FC<CartItemPropTypes> = ({
  name,
  price,
  handleRemoveFromCart,
  qnt,
  addToCart,
  removeUnitFromCart,
}) => {
  return (
    <li className="flex flex-col items-start mb-2 p-2 rounded bg-gray-100 relative">
      <h6 className="text-base font-bold">{`${name} - x${qnt}`}</h6>
      <p className="text-sm">Preço Und: R$ {formatCurrency(price)}</p>
      <p className="text-sm">Subtotal: R$ {formatCurrency(price * qnt)}</p>
      <div>
        <Button variant="ghost" onClick={addToCart}>
          <MdAdd />
        </Button>
        <Button variant="ghost" onClick={removeUnitFromCart}>
          <MdOutlineRemove />
        </Button>
      </div>
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
