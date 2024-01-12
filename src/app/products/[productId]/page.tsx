import { ProductDetails } from "@/components";

export default function ProductDetail() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="container pb-10">
        <h2 className="text-5xl font-bold mx-20 my-10">Detalhes do produto</h2>
        <ProductDetails />
      </div>
    </main>
  );
}
