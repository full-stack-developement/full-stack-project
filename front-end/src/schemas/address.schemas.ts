import * as yup from "yup"

export const userSchema = yup.object().shape({
    cep : yup.number().required("O cep é obrigatório").typeError("Digite um cep válido"),
    state : yup.string().required("O estado é obrigatório"),
    city : yup.string().required("A cidade é obrigatório"),
    street : yup.string().required("A rua é obrigatório"),
    number : yup.number().required("O número é obrigatório").typeError("Digite um número válido"),
    complement: yup.string().notRequired(),
})
export const userUpdateSchema = yup.object().shape({
    cep : yup.number().optional().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value),
    state : yup.string().optional(),
    city : yup.string().optional(),
    street : yup.string().optional(),
    number : yup.number().optional().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value),
    complement: yup.string().optional(),
})