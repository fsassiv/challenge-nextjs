import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useProductsContext } from "@/context/Product";
import { useRouter } from "next/navigation";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { Button } from "../ui/button";

type ProductPropTypes = {
  name: string;
  description: string;
  price: number;
  id: string;
};

export const Product = ({ name, description, price, id }: ProductPropTypes) => {
  const { addToCart } = useProductsContext();
  const { push } = useRouter();

  return (
    <Card className="p-4 min-h-[100px] bg-gray-100 hover:bg-gray-200">
      <CardTitle>{name}</CardTitle>
      <CardDescription>
        <p>{description}</p>
        <p>R$: {price.toFixed(2)}</p>
      </CardDescription>
      <CardFooter className="p-0 mt-4">
        <Button
          type="button"
          onClick={() => push(`/product/${id}`)}
          className="p-2 px-4 mr-2"
        >
          <MdOutlineRemoveRedEye title="Ver detalhes do produto" size={20} />
        </Button>
        <Button
          type="button"
          onClick={() => addToCart({ id, name, description, price })}
          className="p-2 px-4"
        >
          <MdAddShoppingCart title="Adicionar ao carrinho" size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
};
