import { apiClient } from "."


export const submitNewMedia = async (title: string, creator: string, year: string, mediaType: string, userRating: number, targetAudience: string) => {
    try {
        let response = await apiClient.post(`/media/${mediaType}`, {
            title: title,
            creator: creator,
            year: year,
            targetAudience: targetAudience,
            userRating: userRating,
            type: mediaType
        })
        if (response.status === 201 || response.status === 200) {
            return {
                submissionMessage: `Your ${mediaType} submission was successful`
            }
        }else if (response.status === 401) {
            return {
                submissionMessage: `Your ${mediaType} submission was unsuccessful`
            }
        }else {
            return {
                submissionMessage: 'Something went wrong'
            }
        }
    }catch (e) {
        console.log(e);
        return {
            submissionMessage: 'Something went wrong'
        }
    }
}