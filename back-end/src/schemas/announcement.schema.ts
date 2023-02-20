import * as yup from "yup"

export const announcementSchema = yup.object({
    type : yup.string().oneOf(["sale","auction"],"Tipos de anúncio: sale(venda), auction(leilão)").required("O tipo de anúncio é obrigatório"),
    vehicleType : yup.string().oneOf(["car","motorcycle"],"Tipos de veículo: car(carro), motorcycle(moto)").required("O tipo de veículo é obrigatório"),
    title : yup.string().required("O título do anúncio é obrigatório"),
    year : yup.number().required("O ano do veículo é obrigatório"),
    km : yup.number().required("A quilometragem do veículo é obrigatória"),
    price : yup.number().required("O preço do veículo é obrigatório"),
    description: yup.string().notRequired(),
    coverImage : yup.string().url().required("A imagem de fundo do anúncio é obrigatória"),
    user_id : yup.number().required()
})