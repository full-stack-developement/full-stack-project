import * as yup from "yup"

export const userSchema = yup.object({
    cep : yup.number().required("O cep é obrigatório"),
    state : yup.string().required("O estado é obrigatório"),
    city : yup.string().required("A cidade é obrigatório"),
    street : yup.string().required("A rua é obrigatório"),
    number : yup.number().required("O número é obrigatório"),
    complement: yup.string().notRequired(),
})
export const userUpdateSchema = yup.object({
    cep : yup.number().optional(),
    state : yup.string().optional(),
    city : yup.string().optional(),
    street : yup.string().optional(),
    number : yup.number().optional(),
    complement: yup.string().optional(),
})