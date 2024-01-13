"use client";
import { CartProvider } from "@/context/Cart";
import { ProductsProvider } from "@/context/Product";
import { SessionProvider } from "next-auth/react";
import { ProvidersPropTypes } from "./types";

export default function Providers({ children }: ProvidersPropTypes) {
  return (
    <SessionProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </SessionProvider>
  );
}
