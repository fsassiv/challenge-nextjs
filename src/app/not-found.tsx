import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container flex flex-col pt-40 items-center h-full">
      <h4 className="mb-6 font-bold text-lg">Página não encontrada!</h4>
      <Link href="/">
        <Button type="button" variant="outline">
          Voltar para Home
        </Button>
      </Link>
    </div>
  );
}
