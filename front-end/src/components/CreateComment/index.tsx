import { Box } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { CommentsContext } from "../../contexts/comments.context";
import { commentSchema } from "../../schemas/comment.schema";
import { createComment } from "../../utils/comment.util";
import AvatarIcon from "../AvatarIcon";
import { TextArea } from "../TextArea";

export function CreateComment(){

    const {register,handleSubmit} = useForm({resolver : yupResolver(commentSchema)})
    const {vehicle_id} = useParams()
    const {setComments} = useContext(CommentsContext)

    return(
        <Box mb={"1rem"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
            <form onSubmit={handleSubmit(async(data)=>{
                const response = await createComment(data,vehicle_id as string)
                if(response?.message == "success"){
                    setComments((old)=> [...old,response?.data])
                }
            })}>
                <AvatarIcon comment={"create"} size="small"></AvatarIcon>
                <TextArea register={{...register("content")}} comment={true} placeholder="Digite seu comentario" text=""></TextArea>
            </form>
        </Box>
    )
}