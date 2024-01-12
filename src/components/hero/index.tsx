import bg from "@/assets/images/pexels-burst-374894.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
import "./styles.css";

export const Hero = () => {
  return (
    <div
      className="hero min-w-full h-96 flex flex-col items-center justify-between pb-10 pt-20"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h2 className="hero-title font-bold text-5xl text-center min-w-full p-6 text-gray-900">
        Grande Loja
      </h2>
      <Link href="/products">
        <Button>Ver Catálogo de Produtos</Button>
      </Link>
    </div>
  );
};
