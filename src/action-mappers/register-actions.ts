import { apiRegister } from "../remote/mens-rea-app/mens-rea-register"



export const registerTypes = {
    SUCCESSFUL_REGISTER: 'REGISTER_SUCCESSFUL_REGISTER',
    UNSUCCESSFUL_REGISTER: 'REGISTER_UNSUCCESSFUL_REGISTER'
}

export const createNewUser = (username: string, password: string, email: string) => async (dispatch:any) => {
    let response:any = await apiRegister(username, password, email)
    if(response) {
        dispatch({
            type:registerTypes.SUCCESSFUL_REGISTER,
            payload:{
                registerMessage:response.registerMessage
            }
        })
    }else {
        dispatch({
            type:registerTypes.UNSUCCESSFUL_REGISTER,
            payload: {
                registerMessage:response.registerMessage
            }
        })
    }
}