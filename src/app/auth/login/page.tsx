"use client";
import { LoginForm } from "@/components";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";

export default function Login() {
  const { toast } = useToast();

  const callbackUrl =
    useSearchParams()
      .get("callbackUrl")
      ?.replace(window?.location?.origin, "") || "/";

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
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Algo deu errado. Verifique as informações e tente novamente!",
      });
    }
  };

  return (
    <main className="flex h-screen min-w-full flex-col items-center justify-center p-24">
      <LoginForm onSubmit={handleSubmit} />
    </main>
  );
}
