import { apiClient } from ".";

export const mediaSearch = async (searchTerm:string,page:number,mediaType:any) => {
    try {
        let response;
        switch(mediaType) {
            case "BOOK": {
                response=await(apiClient.get(`/media/Book`))
                break;
            }
            case "SHOW": {
                response=await(apiClient.get(`/media/Show`))
                break;
            }
            case "MOVIE": {
                response=await(apiClient.get(`/media/Movie`))
                break;
            }
            default: {
                response=await(apiClient.get(`/media`))
                break;
            }
        }
        if (response.status===200) {
            return response.data
        }
    }catch (e) {
        console.log(e);
        return {
            searchMessage: 'Something went wrong'
        }
    }
}
export const mediaLoad = async () => {
    try{
        let response=await(apiClient.get(`/media`))
        if (response.status===200) {
            return response.data
        }
    }catch (e) {
        console.log(e);
        return {
            searchMessage: 'Something went wrong'
        }
    }
}