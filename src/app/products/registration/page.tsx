import bg from "@/assets/images/pexels-craig-adderley-1727684.jpg";
import { RegisterProductForm } from "@/components";

export default function ProductRegistration() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="pb-10">
        <div className="container">
          <h2 className="text-5xl font-bold mx-20 my-10">Cadastrar produto</h2>
          <p className="mx-20 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi
            dolor aperiam assumenda officiis maxime repudiandae, ullam beatae
            saepe fugit laborum aliquam nesciunt necessitatibus atque ut
            reprehenderit vero odit. Dignissimos?
          </p>
        </div>
        <div
          className="flex justify-end px-20 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <RegisterProductForm />
        </div>
      </div>
    </main>
  );
}
