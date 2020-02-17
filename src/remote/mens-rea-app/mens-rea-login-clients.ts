import { apiClient } from "."

export const apiLogin = async (username: string, password: string) => {
    try {
        let response = await apiClient.post('/auth', {
            username: username,
            password: password
        })
        if (response.status === 200) {
            const body = await response.data
            console.log(response.data);
            return {
                body,
                loginMessage: 'Login Successful'
            }  
        }else if (response.status === 401) {
            return {
                loginMessage: "Invalid Credentials"
            }
        }else {
            return {
                loginMessage: "Something went wrong"
            }
        }
    }catch (error) {
        console.log(error);
        return {
            loginMessage: "Something Went Wrong"
        }
        
    }
}