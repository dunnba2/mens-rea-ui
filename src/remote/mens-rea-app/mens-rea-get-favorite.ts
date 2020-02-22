import { apiClient } from ".";


export const getFavoriteList = async (id:number) => {
    let response = await apiClient.get(`/users/favorites/${id}`)
    console.log(response);
    return response.data
}
