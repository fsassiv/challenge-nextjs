import { ProductsContainer } from "@/components";

export default function ProductRegistration() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="container pb-10">
        <h2 className="text-5xl font-bold mx-20 my-10">Produtos</h2>
        <p className="mx-20 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi
          dolor aperiam assumenda officiis maxime repudiandae, ullam beatae
          saepe fugit laborum aliquam nesciunt necessitatibus atque ut
          reprehenderit vero odit. Dignissimos?
        </p>
        <ProductsContainer />
      </div>
    </main>
  );
}
