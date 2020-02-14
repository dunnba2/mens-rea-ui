import { imdbClient } from "."

export const imdbLoadPage = async () => {
    let response = await imdbClient.get('/?apikey=3c5059d4&s=mystery&page=1')
    console.log(response.data);
    return response.data.Search
    
}

export const imdbSearch = async (search: any, page: number) => {
    let response = await imdbClient.get(`/?apikey=3c5059d4&s=${search}&page=${page}`)
    console.log(response)
    return response.data.Search
}

