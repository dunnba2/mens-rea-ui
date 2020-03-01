import { IWatchListState } from ".";
import { watchListTypes } from "../action-mappers/watchlist-actions";


const initalState: IWatchListState = {
    watchList:[],
    watchListMessage:''
}

export const watchListReducer = (state = initalState, action: any) => {
    switch(action.type) {
        case watchListTypes.GET_WATCHLIST: {
            return {
                ...state,
                watchList:action.payload.watchList,
                watchListMessage:""
            }
        }
        case watchListTypes.NO_WATCHLIST: {
            return {
                ...state,
                watchListMessage: "You don't have any items on your watchlist yet!"
            }
        }
        default:
            return state;
    }
} 