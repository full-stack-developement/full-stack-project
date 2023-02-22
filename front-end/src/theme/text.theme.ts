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
        "text-delete": {
            color : "greyScale.grey2",
            marginTop : "18px",
            marginBottom: "18px",
            fontFamily : "inter",
            fontWeight : "body-1-400",
            fontSize: "body-1-400"
        }
    }
}


export default textTheme