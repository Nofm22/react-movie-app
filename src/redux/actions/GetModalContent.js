
import { dataApi } from "../../services/getData"
import { GET_COMPONENT_CONTENT } from "../types/types";

export const GET_MODAL_CONTENT = (id) => {
    return async dispatch => {
        try {
          
            const req = await dataApi.getVideos(id,'movie')

            
           
            dispatch({
                type:GET_COMPONENT_CONTENT,
                key:req.data.results[0].key,
            })

        } catch(e) {
            console.log(e)
        }


    }
}