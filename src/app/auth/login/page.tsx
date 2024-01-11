"use client";
import { LoginForm } from "@/components";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { FieldValues } from "react-hook-form";

export default function Login() {
  const userName = useRef("");
  const password = useRef("");

  const callbackUrl =
    useSearchParams()
      .get("callbackUrl")
      ?.replace("http://localhost:3000", "") || "/";

  const handleSubmit = async (data: FieldValues) => {
    try {
      const { username, password } = data;

      await signIn("credentials", {
        username,
        password,
        redirect: true,
        callbackUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center p-24">
      <LoginForm onSubmit={handleSubmit} />
    </main>
  );
}
