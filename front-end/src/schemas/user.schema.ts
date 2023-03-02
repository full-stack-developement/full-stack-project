import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
  full_name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  cpf: yup
    .string()
    .length(11, "CPF deve ter 11 números")
    .required("Campo obrigatório"),
  phone: yup
    .string()
    .length(10, "Telefone deve ter 10 números")
    .required("Campo obrigatório"),
  birthDate: yup.date().required("Data de nascimento obrigatória"),
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
  cep: yup
    .string()
    .length(8, "CEP deve ter 8 dígitos")
    .required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("O username é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});
