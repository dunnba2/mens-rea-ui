import { IImdbSearchState } from ".";

const initialState:IImdbSearchState = {
    imdbTitles:[],
    page:1
}

export const imdbReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case 'get titles rendered by search criteria': {
            return {
                ...state,
                imdbTitles:action.payload.imdbTitles
            }
        }
        case 'switch to a new page': {
            return {
                ...state,
                page:action.payload.page
            }
        }
        default:
            return state
    }
}