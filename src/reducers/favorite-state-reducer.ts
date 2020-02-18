import { IFavoriteState } from ".";
import { getAllFavoriteTypes } from "../action-mappers/favorite-action";


const initialState: IFavoriteState = {
    favorites:[]  //do i need userId here?
}

export const iFavoriteStateReducer = (state = initialState, action:any) => {
    switch(action.type){
        case getAllFavoriteTypes.GET_ALL_FAVORITES:{
            return{
                ...state,
                favorites:action.payload.favorites
            }
        }
        case getAllFavoriteTypes.GET_BY_TYPE_FAVORITES:{
            return{
                ...state,
                favorites:action.payload.favorites
            }
        }
        case getAllFavoriteTypes.DELETE_ITEM_FAVORITES:{
            return{
                ...state,
                favorites:action.payload.favorites
            }
        }
        default: {
            return state;
        }
    }
    
}


