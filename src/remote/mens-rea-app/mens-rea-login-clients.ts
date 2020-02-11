import { apiClient } from "."

export const apiLogin = async (username: string, password: string) => {
    try {
        let response = await apiClient.post('/auth', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data);
            
        }, (error) => {
            console.log(error);
            
        })
    }catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong"
        }
        
    }
}