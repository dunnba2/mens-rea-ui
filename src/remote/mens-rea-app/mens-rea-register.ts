import { apiClient } from "."

export const apiRegister = async (username: string, password: string, email: string) => {
    try {
        let response = await apiClient.post('/users', {
            username: username,
            password: password,
            email:email
        })
        if(response.status === 200 || response.status === 201) {
            console.log(response);
            return {
                registerMessage: "You've been registered with Mens Rea"
            } 
        }else if(response.status === 401) {
            return {
                registerMessage: "That username is already taken"
            }
        }else {
            return {
                registerMessage: "Something went wrong"
            }
        }
    }catch (e) {
        console.log(e);
        return {
            registerMessage: "Something Went Wrong"
        }
        
    }
}