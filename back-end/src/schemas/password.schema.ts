import * as yup from "yup";

export const resetPasswordSchema = yup.object({
  email: yup.string().email().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  confirmPassword: yup.string().required("Confirmação de senha é obrigatória"),
});
