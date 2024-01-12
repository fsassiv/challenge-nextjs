"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useRef } from "react";
import { Products } from "./Products";

export const ProductsContainer = () => {
  const search = useRef("");
  const { push } = useRouter();

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Enter") {
      push(`/products?search=${search.current}`);
      return;
    }
  };

  return (
    <div className="mx-20">
      <Input
        type="text"
        placeholder="Qual produto esta procurando?"
        onKeyDown={onKeyDown}
        onChange={({ target }) => (search.current = target.value)}
      />
      <Products />
    </div>
  );
};
