import { getFavoriteList } from "../remote/mens-rea-app/mens-rea-get-favorite"


export const getAllFavoriteTypes = {
    GET_ALL_FAVORITES: "GET_ALL_FAVORITES",
    GET_BY_TYPE_FAVORITES: "GET_ALL_FAVORITES_BY_TYPE",
    DELETE_ITEM_FAVORITES:"DELETE_ITEM_FROM_FAVORITES",
    NO_FAVORITES_LIST: "FAVORITES_NO_FAVORITES_LIST"

}

export const getAllFavoriteList = (id:number) => async (dispatch:any) => {
    let favs = await getFavoriteList(id)
    let body = await favs
    console.log(body);
    
    if(body.length !== 0){
        dispatch({
            type:getAllFavoriteTypes.GET_ALL_FAVORITES,
            payload:{
                favorites:favs
            }
        })
    }else {
        dispatch({
            type:getAllFavoriteTypes.NO_FAVORITES_LIST
        })
    }
        
}

export const getAllByTypeFavoriteList = (id:number, type:string) => async (dispatch:any) => {
    let favoriteTypes = (await getAllByTypeFavoriteList(id, type))
    dispatch({
        type:getAllFavoriteTypes.GET_BY_TYPE_FAVORITES,
        payload:{
            favorites:favoriteTypes
        }
    })
}

export const deleteItemFromFavoriteList = (userId:number, mediaId: number) => async (dispatch:any) => {
    let deleteFavorite = await deleteItemFromFavoriteList(userId, mediaId)
    dispatch({
        type:getAllFavoriteTypes.DELETE_ITEM_FAVORITES,
        payload:{
            favorites:deleteFavorite
        }
    })
}