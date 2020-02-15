import { IFavoriteState } from ".";  
import { getAllFavorites } from "../action-mappers/favorite-action";


const initialState: IFavoriteState = {
    favorites:[]  //do i need userId here
}

export const iFavoriteStateReducer = (state = initialState, action:any) => {
    switch(action.type){
        case getAllFavorites.GET_FAVORITES:{
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

