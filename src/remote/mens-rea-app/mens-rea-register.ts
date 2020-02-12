import { apiClient } from "."

export const apiRegister = async (username: string, password: string, email: string) => {
    try {
        let response = await apiClient.post('/users', {
            username: username,
            password: password,
            email:email
        })
        .then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        })
    }catch (e) {
        console.log(e);
        return {
            registerMessage: "Something Went Wrong"
        }
        
    }
}