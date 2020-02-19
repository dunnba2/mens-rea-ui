import { getWatchList } from "../remote/mens-rea-app/mens-rea-get-watchlist"



export const getAllWatchlistTypes = {
    GET_ALL_WATCHLISTS: "GET_ALL_WATCHLISTS",
    GET_BY_TYPE_WATCHLISTS: "GET_BY_TYPE_WATCHLISTS",
    DELETE_FROM_WATCHLISTS:"DELETE_FROM_WATCHLISTS"

}

export const getAllWatchlist = () => async (id:number) => async (dispatch:any) => {
    let watch:any = await getWatchList(id)
    dispatch({
        type:getAllWatchlistTypes.GET_ALL_WATCHLISTS,
        payload:{
            watchlists:watch
        }
    })
}

export const getAllByTypeWatchlist = (id:number, type:string) => async (dispatch:any) => {
    let watchTypes = (await getAllByTypeWatchlist(id, type))
    dispatch({
        type:getAllWatchlistTypes.GET_BY_TYPE_WATCHLISTS,
        payload:{
            watchlists:watchTypes
        }
    })
}

export const deleteItemFromWatchlist = (userId:number, mediaId: number) => async (dispatch:any) => {
    let deleteWatch = await deleteItemFromWatchlist(userId, mediaId)
    dispatch({
        type:getAllWatchlistTypes.DELETE_FROM_WATCHLISTS,
        payload:{
            watchlists:deleteWatch
        }
    })
}