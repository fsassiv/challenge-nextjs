"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MdFormatListBulleted, MdHome } from "react-icons/md";

export const NavigationBar = () => {
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};
