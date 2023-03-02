import * as yup from "yup"

export const userSchema = yup.object({
    accounType : yup.string().oneOf(["seller","buyer"],"Tipos de conta: seller(anunciante), buyer(comprador)").required("O tipo de conta é obrigatório"),
    full_name : yup.string().required("O nome é obrigatório"),
    email : yup.string().email().required("O email é obrigatório"),
    cpf : yup.number().required("O cpf é obrigatório"),
    phone : yup.number().required("O telefone é obrigatória"),
    birthDate : yup.date().required("A data do nascimento é obrigatório"),
    description: yup.string().notRequired(),
})
export const userUpdateSchema = yup.object({
    announcementType : yup.string().oneOf(["seller","buyer"],"Tipos de conta: seller(anunciante), buyer(comprador)").optional(),
    title : yup.string().optional(),
    year : yup.number().optional(),
    km : yup.number().optional(),
    price : yup.number().optional(),
    description: yup.string().optional()
})