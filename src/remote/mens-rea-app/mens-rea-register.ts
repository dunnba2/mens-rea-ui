import { apiClient } from "."

export const apiRegister = async (username: string, password: string, email: string) => {
    let body
    try {
        let response = await apiClient.post('/users', {
            username: username,
            password: password,
            email:email
        })
        body = await response
        return body
        
    }catch (error) {
       body = error.response
       return body
    }
}