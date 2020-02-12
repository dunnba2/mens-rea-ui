import { IImdbSearchState } from ".";
import { imdbSearchTypes } from "../action-mappers/imdb-search-actions";

const initialState:IImdbSearchState = {
    imdbTitles:[],
    search:'Mystery',
    page:1
}

export const imdbReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case imdbSearchTypes.GET_FIRST_PAGE_SEARCH_TITLES: {
            return {
                ...state,
                imdbTitles:action.payload.imdbTitles
            }
        }
        case imdbSearchTypes.NEW_PAGE_IMDB_SEARCH_TITLES: {
            return {
                ...state,
                imdbTitles:action.payload.imdbTitles,
                search:action.payload.search,
                page:action.payload.page
            }
        }
        case imdbSearchTypes.INCREMENT_IMDB_SEARCH_TITLES_PAGE: {
            return {
                ...state,
                page:action.payload.page
            }
        }
        case imdbSearchTypes.GET_NEXT_PAGE_SEARCH_TITLES:{
            return {
                ...state,
                imdbTitles:action.payload.imdbTitles
            }
        }
        default:
            return state
    }
}