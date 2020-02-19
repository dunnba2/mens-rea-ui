import { IGooogleBookState } from ".";
import { googleBookTypes } from "../action-mappers/google-book-actions";

const initialState:IGooogleBookState = {
    bookResults:[],
    search:'',
    page:0
}

export const googleBookReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case googleBookTypes.GET_LOAD_PAGE_MYSTERY: {
            return {
                ...state,
                bookResults:action.payload.bookResults
            }
        }
        case googleBookTypes.NEW_BOOK_SEARCH: {
            return {
                ...state,
                bookResults:action.payload.bookResults,
                search:action.payload.search,
                page:action.payload.page
            }
        }
        case googleBookTypes.INCREMENT_LOAD_PAGE_MYSTERY: {
            return {
                ...state,
                bookResults: action.payload.bookResults,
                page: action.payload.page
            }
        }
        // case googleBookTypes.INCREMENT_NEW_BOOK_SEARCH:{
        //     return {
        //         ...state,
        //         bookResults:action.payload.bookResults
        //     }
        // }
        default:
            return state
    }
}