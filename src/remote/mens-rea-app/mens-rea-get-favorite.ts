import { apiClient } from ".";


export const getFavoriteList = async (id:number) => {
    let response = await apiClient.get(`/media/favorites/${id}`)
    console.log(response);
    return response.data
}

export const getFavoriteByType = async (id:number, type:string) => {
    let response = await apiClient.get(`/media/favorites/${id} and ${type}`)
    console.log(response);
    return response.data
}

export const deleteFavorite = (id:number, mediaId:number) => {
    let response = await apiClient.delete(id, mediaId);
    console.log("Favorite Item deleted");
    getFavoriteList
}
/* 
get list of favorites from database
using list, pull the necesary info from the api
    - search by name, creator, year or combi??
    - search by name, if multiple refine by year?
display 

*/