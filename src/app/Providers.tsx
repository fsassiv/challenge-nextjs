"use client";
import { SessionProvider } from "next-auth/react";
import { ProvidersPropTypes } from "./types";

export default function Providers({ children }: ProvidersPropTypes) {
  return <SessionProvider>{children}</SessionProvider>;
}
