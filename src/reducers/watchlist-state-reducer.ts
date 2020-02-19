import {IWatchlistState} from "."
import { getAllWatchlistTypes } from "../action-mappers/watchlist-actions"


const initialState: IWatchlistState = {
    watchlists:[]
}

export const iWatchlistStateReducer = (state = initialState, action:any) => {
    switch(action.type){
        case getAllWatchlistTypes.GET_ALL_WATCHLISTS:{
            return{
                ...state,
                watchlists:action.payload.watchlists
            }
        }
        case getAllWatchlistTypes.GET_BY_TYPE_WATCHLISTS:{
            return{
                ...state,
                watchlists:action.payload.watchlists
            }
        }
        case getAllWatchlistTypes.DELETE_FROM_WATCHLISTS:{
            return{
                ...state,
                watchlists:action.payload.watchlists
            }
        }
        default:{
            return state;
        }
    }
}