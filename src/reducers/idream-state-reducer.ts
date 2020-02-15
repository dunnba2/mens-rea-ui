import {IDreamState} from ".";
import {dreamBooksSearch} from "../action-mappers/idream-book-actions"

const initialState: IDreamState = {
    iDreamBooks:[]
}
export const iDreamStateReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case dreamBooksSearch.GET_RECOMMENDATIONS: {
            return {
                ...state,
                iDreamBooks:action.payload.iDreamBooks
            }
        }
        default: {
            return state;
        }
    }
}