import { FieldValues, SubmitHandler } from "react-hook-form";

export interface LoginFormPropTypes {
  onSubmit: SubmitHandler<FieldValues>;
}
