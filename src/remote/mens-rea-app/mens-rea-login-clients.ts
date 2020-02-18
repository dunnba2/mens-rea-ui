import { apiClient } from "."

export const apiLogin = async (username: string, password: string) : Promise<object> => {
    let body;
    try{
        let response = await apiClient.post('/auth', {
            username: username,
            password: password
        })
        body = await response  
        return body  
    }catch(error) {
        body = error.response        
        return body
    }
}