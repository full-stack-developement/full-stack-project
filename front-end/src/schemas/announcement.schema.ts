import * as yup from "yup"

export const announcementSchema = yup.object().shape({
    type : yup.string().oneOf(["sale","auction"],"Tipos de anúncio: sale(venda), auction(leilão)").required("O tipo de anúncio é obrigatório"),
    vehicleType : yup.string().oneOf(["car","motorcycle"],"Tipos de veículo: car(carro), motorcycle(moto)").required("O tipo de veículo é obrigatório"),
    title : yup.string().required("O título do anúncio é obrigatório"),
    year : yup.number().required("O ano do veículo é obrigatório").typeError("Digite um ano válido").test({message : "Digite um ano válido",test : (value : number,)=>{
        const valueString = String(value)
        const year = new Date().getFullYear()
        if(valueString.length < 4 || valueString.length > 4){
            return false
        }
        if(value > year){
            return false
        }
        return true
    }}),
    km : yup.number().required("A quilometragem do veículo é obrigatória").typeError("Digite um valor válido"),
    price : yup.number().required("O valor do veículo é obrigatório").typeError("Digite um valor válido"),
    description: yup.string().notRequired(),
    coverImage : yup.string().url("Digite uma url válida").required("A imagem de fundo do anúncio é obrigatória"),
})