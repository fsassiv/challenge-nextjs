"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartContext } from "@/context/Cart";
import { ProductTypes } from "@/context/Product";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import { CartItem } from "./CartItem";
import "./styles.css";

export const Cart = () => {
  const { cart, cartAmount, removeFromCart } = useCartContext();

  const uniqueList = (
    list: ProductTypes[],
    key: (target: ProductTypes) => ProductTypes
  ): ProductTypes[] => {
    return [...new Map(list.map((item) => [key(item), item])).values()];
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <MdShoppingCart size={20} /> Carrinho
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Seu carinho</SheetTitle>
        </SheetHeader>
        <ul className="h-full">
          {uniqueList(cart, (it: any) => it.name).map((item) => (
            <CartItem
              key={item.id}
              {...item}
              qnt={cart.filter((cItem) => cItem.id === item.id).length}
              handleRemoveFromCart={() => removeFromCart(item.id)}
            />
          ))}
        </ul>
        <SheetFooter>
          <h3 className="text-2xl">Seu total R$: {cartAmount.toFixed(2)}</h3>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
