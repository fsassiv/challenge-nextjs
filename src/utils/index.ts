import { formatValue } from "react-currency-input-field";

export const formatCurrency = (value: number) => {
  const converted = value.toFixed(2).toString();
  return formatValue({
    value: converted,
    groupSeparator: ".",
    decimalSeparator: ",",
    prefix: "R$ ",
    intlConfig: { locale: "pt-BR", currency: "INR" },
  });
};
