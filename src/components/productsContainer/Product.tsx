import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type ProductPropTypes = {
  name: string;
  description: string;
  price: number;
};

export const Product = ({ name, description, price }: ProductPropTypes) => {
  return (
    <Card className="p-4 h-[100px] bg-gray-100 cursor-pointer hover:bg-gray-200">
      <CardTitle>{name}</CardTitle>
      <CardDescription>
        <p>{description}</p>
        <p>R$: {price.toFixed(2)}</p>
      </CardDescription>
    </Card>
  );
};
