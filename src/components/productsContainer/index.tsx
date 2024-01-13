"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useRef } from "react";
import { Button } from "../ui/button";
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
        placeholder="Qual produto esta procurando? [Digite ENTER para filtrar]"
        onKeyDown={onKeyDown}
        onChange={({ target }) => (search.current = target.value)}
      />
      <Link href="/products/registration" className="inline-block my-3">
        <Button type="button">Cadastrar produto</Button>
      </Link>
      <Products />
    </div>
  );
};
