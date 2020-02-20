import {apiClient} from '.'

export const submitReview = async (userId: number, mediaId: number, recommended: boolean, review:string) => {
    try {
        let response = await apiClient.post('/review', {
            userId: userId,
            mediaId: mediaId,
            recommended: recommended,
            review: review
        })
        if (response.status === 201 || response.status === 200) {
            return {
                reviewMessage: 'Your review was successful'
            }
        }else {
            return {
                reviewMessage: 'Your review was not saved'
            }
        }
    }catch (error) {
        console.log(error);
        return {
            reviewMessage: 'Something went wrong'
        }
        
    }
}