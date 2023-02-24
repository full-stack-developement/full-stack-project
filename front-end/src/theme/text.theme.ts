import { ComponentStyleConfig } from "@chakra-ui/theme"

const textTheme : ComponentStyleConfig = {
    variants : {
        "title-content-form":
        {
            color : "greyScale.grey0",
            marginTop : "18px",
            marginBottom: "30px",
            fontFamily : "inter",
            fontWeight : "body-2-500.weight",
            fontSize: "body-2-500.size"
        },
        "label-content-form":{
            color : "greyScale.grey1",
            marginTop : "18px",
            marginBottom: "18px",
            fontFamily : "inter",
            fontWeight : "input-label.weight",
            fontSize: "input-label.size"
        },
        "errors-form":{
            color : "feedback.alert1",
            marginTop : "10px",
            marginBottom: "18px",
            fontFamily : "inter",
            fontWeight : "input-label.weight",
            fontSize: "0.7rem"
        },
        "text-delete": {
            color : "greyScale.grey2",
            marginTop : "18px",
            marginBottom: "18px",
            fontFamily : "inter",
            fontWeight : "body-1-400",
            fontSize: "body-1-400"
        },
        "title-card" :{
            color : "greyScale.grey1",
            marginBottom : "28px",
            fontFamily : "lexend",
            fontWeight : "Heading-6-600.weight",
            fontSize: "Heading-6-600.size"
        },
        "info-card":{
            backgroundColor : "brand.brand4",
            padding : "4px 8px",
            color : "brand.brand1",
            fontFamily : "inter",
            fontWeight : "body-2-500.weight",
            fontSize: "body-2-500.size"
        },
        "profile-description":{
            marginTop : "2rem",
            color : "greyScale.grey2",
            fontFamily : "inter",
            fontWeight : "body-1-400.weight",
            fontSize: "body-1-400.size"
        }
    }
}


export default textTheme