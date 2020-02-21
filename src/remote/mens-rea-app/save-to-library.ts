import { apiClient } from "."


export const saveToLibrary = async (userId: number, mediaId: number) => {
        let response = await apiClient.post(`media/favorites/${userId}/${mediaId}`)
        console.log(response);

        return response
}