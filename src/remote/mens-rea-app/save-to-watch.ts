import { apiClient } from "."


export const saveToWatch = async (userId:number, mediaId:number) => {
        let response = await apiClient.post(`/media/watchlist/${userId}/${mediaId}`)
        console.log(response);
        
        return response
}