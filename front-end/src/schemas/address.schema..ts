import * as yup from "yup";

export const addressCreateSchema = yup.object().shape({
  cep: yup
    .number()
    .min(8, "CEP deve ter 8 dígitos")
    .required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
});
