import { apiClient } from ".";

export const mediaSearch = async (searchTerm:string,page:number,mediaType:any) => {
    try {
        let response;
        if (searchTerm===""){
        switch(mediaType) {
            case "Book": {
                response=await(apiClient.get(`/media/Book`))
            }
            case "Show": {
                response=await(apiClient.get(`/media/Show`))
            }
            case "Movie": {
                response=await(apiClient.get(`/media/Movie`))
            }
            default: {
                response=await(apiClient.get(`/media`))
            }
        }
        if (response.status===200) {
            return response.data
        }
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