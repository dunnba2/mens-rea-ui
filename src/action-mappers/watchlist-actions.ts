import { getWatchList } from "../remote/mens-rea-app/mens-rea-get-watchlist"


export const watchListTypes = {
    GET_WATCHLIST: 'WATCHLIST_GET_WATCHLIST',
    NO_WATCHLIST: 'WATCHLIST_NO_WATCHLIST'
}

export const getAllWatchList = (id:number) => async (dispatch:any) => {
    let list = await getWatchList(id)
    let body = await list
    console.log(body);
    
    if(body.length !== 0) {
        dispatch({
            type:watchListTypes.GET_WATCHLIST,
            payload:{
                watchList:list
            }
        })
    }
    else {
        dispatch({
            type:watchListTypes.NO_WATCHLIST
        })
    }
}