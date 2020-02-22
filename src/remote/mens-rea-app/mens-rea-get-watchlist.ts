import { apiClient } from ".";

export const getWatchList = async (id:number) => {
    let response = await apiClient.get(`/users/watchlist/${id}`)
    console.log(response);
    return response.data
}