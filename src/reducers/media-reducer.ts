import {IMediaState} from ".";
import {mediaTypes} from "../action-mappers/media-actions"

const initialState:IMediaState = {
    searchResults:[],
    searchTerm:"",
    page:1,
    type: null
}
export const mediaReducer = (state=initialState,action:any) => {
    switch(action.type) {
        case mediaTypes.GET_DEFAULT_RESULT_SET: {
            //default result set call
            return{
                ...state,
                searchResults:action.payload.searchResults
            }
        }
        case mediaTypes.GET_NEW_SEARCH_RESULT_SET: {
            //new search result set call
            return{
                ...state,
                searchResults:action.payload.searchResults,
                searchTerm:action.payload.searchTerm,
                page:action.payload.page,
                type:action.payload.type
            }
        }
        case mediaTypes.GET_NEXT_RESULTS_PAGE: {
            //change the page.
            return{
                ...state,
                searchResults:action.payload.searchResults
            }
        }
        case mediaTypes.INCREMENT_PAGE_COUNT: {
            //up that page count!
            return{
                ...state,
                page:action.payload.page
            }
        }
        default: {
            return state;
        }
    }
}
