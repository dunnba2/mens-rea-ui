import {mediaSearch, mediaLoad} from "../remote/mens-rea-app/mens-rea-media-search";
import { type } from "os";

export const mediaTypes = {
    GET_DEFAULT_RESULT_SET: "MEDIA_GET_DEFAULT_RESULT_SET",
    GET_NEW_SEARCH_RESULT_SET: "MEDIA_GET_NEW_SEARCH_RESULT_SET",
    GET_NEXT_RESULTS_PAGE: "MEDIA_GET_NEXT_RESULTS_PAGE",
    INCREMENT_PAGE_COUNT: "MEDIA_INCREMENT_PAGE_COUNT"
}
export const getAllMedia = () => async (dispatch:any) => {
    let media=(await mediaLoad())
    dispatch({
        type:mediaTypes.GET_DEFAULT_RESULT_SET,
        payload:{
            searchResults:media
        }
    })
}
export const getNewPageMediaResults=(searchTerm:string,page:number,mediaType:any) => async (dispatch:any) => {
    let media=(await mediaSearch(searchTerm, page, mediaType))
    dispatch ({
        type:mediaTypes.GET_NEW_SEARCH_RESULT_SET,
        payload:{
            searchResults:media,
            searchTerm:searchTerm,
            page:page,
            type:mediaType
        }
    })
}
export const getNextPageMediaResults=(searchTerm:string,page:number,mediaType:any) => async (dispatch:any) => {
    let media=(await mediaSearch(searchTerm, page, mediaType))
    dispatch ({
        type:mediaTypes.GET_NEXT_RESULTS_PAGE,
        payload: {
            searchResults:media
        }
    })
}
export const changeMediaResultsPage=(searchTerm:string,page:number,mediaType:any) => async (dispatch:any) => {
    return ({
        type:mediaTypes.INCREMENT_PAGE_COUNT,
        payload: {
            page
        }
    })
}