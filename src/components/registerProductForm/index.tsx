"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useProductsContext } from "@/context/Product";
import { CurrencyInputOnChangeValues } from "react-currency-input-field";
import { v4 as uuidv4 } from "uuid";
import { AppCurrencyInput } from "..";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres",
  }),
  description: z.string().min(6, {
    message: "Descrição deve ter pelo menos 6 caracteres",
  }),
  price: z.number().min(1, { message: "Preço deve ser maior que zero" }),
});

export const RegisterProductForm = () => {
  const { addProduct } = useProductsContext();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    addProduct({ ...data, price: parseFloat(data.price), id: uuidv4() });
    toast({
      title: "Cadastro de produto",
      description: "Produto cadastrado com sucesso",
    });
    clearFields();
  };

  const clearFields = () => {
    form.setValue("name", "");
    form.setValue("description", "");
  };

  const handleValueChange = (
    _value: string | undefined,
    _name: string | undefined,
    values: CurrencyInputOnChangeValues | undefined
  ) => {
    form.setValue("price", values?.float);
  };

  return (
    <div className="mx-20 bg-white p-4 w-full lg:w-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 px-10"
        >
          <h4 className="font-bold text-xl">Formulario de produto</h4>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Input placeholder="Descrição do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <AppCurrencyInput
                    name="price"
                    onValueChange={handleValueChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  );
};
