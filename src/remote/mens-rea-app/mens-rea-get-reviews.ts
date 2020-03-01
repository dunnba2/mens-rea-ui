import { apiClient } from "."


export const getReviews = async (id:number) => {
    let response = await apiClient.get(`/review/${id}`)
    console.log(response);
    return response.data;
    
}