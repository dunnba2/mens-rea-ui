import { apiClient } from "."


export const saveToLibrary = async (userId:number, mediaId:number) => {
        let response = await apiClient.post(`/favorites/${userId}/${mediaId}`)
        return response
}