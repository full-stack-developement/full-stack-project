import * as yup from "yup";

export const userRegisterSchema = yup
  .object()
  .shape({
    full_name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),
    cpf: yup
      .number()
      .min(11, "Deve ter 11 números")
      .required("Campo obrigatório"),
    phone: yup
      .number()
      .min(11, "Telefone deve ter 11 números")
      .required("Campo obrigatório"),
    birthdate: yup.date().required("Campo obrigatório"),
    description: yup.string(),
    accountType: yup
      .string()
      .oneOf(
        ["seller", "buyer"],
        "Tipos de usuário: seller(vendedor), buyer(comprador)"
      )
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .max(15, "Senha deve ter no máximo 15 caracteres")
      .matches(
        /^([a-zA-Z0-9@*#]{8,15})$/,
        "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere")
      .required("Confirme sua senha"),
  })
  .shape({
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
