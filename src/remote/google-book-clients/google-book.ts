import { googleBookClient } from '.';

export const googleBooksLoadPage = async () => {
    let response = await googleBookClient.get('/v1/volumes?q=subject:mystery&page=1&projection=lite&key=AIzaSyDYajTuzUcKQRZ3cKcG_6uhtFI0h6UmcjU')
    console.log(response.data.items);
    return response.data.items  
}

export const googleBookLoadNext = async (search: any, page: number) => {
    let response
    if(search === '') {
        response = await googleBookClient.get(`/v1/volumes?q=subject:mystery&page=${page}&projection=lite&key=AIzaSyDYajTuzUcKQRZ3cKcG_6uhtFI0h6UmcjU`)
        console.log(response);
        return response.data.items 
    }else {
        response = await googleBookClient.get(`/v1/volumes?q=${search}&subject:mystery&page=${page}&projection=lite&key=AIzaSyDYajTuzUcKQRZ3cKcG_6uhtFI0h6UmcjU`)
        console.log(response);
        return response.data.items
    }
}