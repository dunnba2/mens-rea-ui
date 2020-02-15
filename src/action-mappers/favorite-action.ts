import { getFavoriteList } from "../remote/favorite-clients/get-favorite"


export const getAllFavorites = {
    GET_FAVORITES: "GET_ALL_FAVORITES"
}

export const getAllFavoriteList = () => async (id:number) => async (dispatch:any) => {
    let favs:any = await getFavoriteList(id)
    dispatch({
        type:getAllFavorites.GET_FAVORITES,
        payload:{
            favorites:favs
        }
    })
}