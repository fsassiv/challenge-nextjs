"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Session } from "next-auth";
import Link from "next/link";
import { MdFormatListBulleted, MdHome, MdOutlineNoteAlt } from "react-icons/md";
import { Cart } from "..";

interface NavigationBarPropTypes {
  session: Session | null;
}

export const NavigationBar = ({ session }: NavigationBarPropTypes) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="mr-10">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center text-gray-700">
              <MdHome size={20} /> Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center text-gray-700">
              <MdFormatListBulleted size={20} /> Produtos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {session ? (
          <NavigationMenuItem className="pl-10">
            <Link href="/products/registration" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center text-gray-700">
                <MdOutlineNoteAlt size={20} /> Cadastro de Produtos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : null}
        <NavigationMenuItem className="pl-10">
          <Cart />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
