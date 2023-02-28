import * as yup from "yup"

export const commentsSchema = yup.object({
   content : yup.string().required()
})
export const commentsUpdateSchema = yup.object({
    content : yup.string().required()
})