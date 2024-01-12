import { MdShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import "./styles.css";

export const Cart = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <MdShoppingCart size={20} /> Carrinho
        </Button>
      </DrawerTrigger>
      <DrawerContent className="drawer-content min-h-screen  h-screen max-h-screen max-w-xs rounded-none p-4">
        <h4 className="font-bold text-lg">Seu Carrinho</h4>
        <hr />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
        dignissimos molestiae excepturi! Soluta sit voluptatum rerum, nesciunt
        id nobis tempora! Voluptate omnis doloremque architecto dolorum tempore
        consequatur accusamus vero voluptatum!
      </DrawerContent>
    </Drawer>
  );
};
