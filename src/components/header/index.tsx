"use client";
import { Button } from "@/components/ui/button";

import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineLogin, MdOutlineLogout, MdTagFaces } from "react-icons/md";
import { NavigationBar } from "../";
import { Badge } from "../ui/badge";

export const Header = () => {
  const [session, setSession] = useState<Session | null>(null);

  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await getSession();

        setSession(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <header className="container flex py-2 px-4 justify-between items-center border-b">
      <NavigationBar session={session} />
      <div className="flex items-center">
        {session ? (
          <Badge variant="outline">
            <MdTagFaces />
            {session?.user?.name}
          </Badge>
        ) : null}
        {!usePathname().includes("login") && session ? (
          <Button
            variant="ghost"
            title="Logout"
            onClick={() => signOut()}
            className="text-gray-700"
          >
            <MdOutlineLogout size={20} />
          </Button>
        ) : null}
        {!usePathname().includes("login") && !session ? (
          <Button
            variant="ghost"
            title="Login"
            onClick={() => push("/auth/login")}
            className="text-gray-700"
          >
            <MdOutlineLogin size={20} />
          </Button>
        ) : null}
      </div>
    </header>
  );
};
