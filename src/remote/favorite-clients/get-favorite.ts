import { apiClient } from "../mens-rea-app";


export const getFavoriteList = async (id:number) => {
    let response = await apiClient.get(`/media/favorites/${id}`)
    console.log(response);
    return response.data
}
/* 
get list of favorites from database
using list, pull the necesary info from the api
    - search by name, creator, year or combi??
    - search by name, if multiple refine by year?
display 

*/