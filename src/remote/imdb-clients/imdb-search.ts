import { imdbClient } from "."


export const imdbSearch = async (search: string, page: number) => {
    let response = await imdbClient.get(`/?apikey=3c5059d4&s=${search}&page=${page}`)
    console.log(response.data);
    return response.data
}