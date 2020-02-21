import { apiClient } from "."


export const saveToLibrary = async (userId:number, media:any) => {
        let response = await apiClient.post(`/media/favorites/`, {
            title: media.title,
            creator: media.creator,
            year: media.year,
            targetAudience: media.targetAudience,
            userRating: media.userRating,
            type: media.mediaType,
            userId: userId
        })
        console.log(response);
        
        return response
}