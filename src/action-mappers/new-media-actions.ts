import { apiMedia } from "../remote/mens-rea-app/mens-rea-new-media"

export const newMedia = {
    SUCCESSFULLY_ADDED: 'ADDED_SUCCESSFULLY',
    UNSUCCESSFULLY_ADDED: 'ADDED_UNSUCCESSFULLY'
}

export const createNewMedia = (title: string, creator: string, year:number, targetAudience:string, userrating: number, media_type: string) => async(dispatch:any) => {
    let response:any = await apiMedia(title, creator, year, targetAudience, userrating, media_type)
    if(response){
        dispatch({
            type:newMedia.SUCCESSFULLY_ADDED,
            payload: {
                newMedia:response.addFavMedia
            }
        })
    }else {
        dispatch({
            type:newMedia.UNSUCCESSFULLY_ADDED,
            payload: {
                newMedia:response.addFavMedia
            }
        })
    }
}