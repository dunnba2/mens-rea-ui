import { apiRegister } from "../remote/mens-rea-app/mens-rea-register"

export const registerTypes = {
    SUCCESSFUL_REGISTER: 'REGISTER_SUCCESSFUL_REGISTER',
    UNSUCCESSFUL_REGISTER: 'REGISTER_UNSUCCESSFUL_REGISTER'
}

export const createNewUser = (username: string, password: string, email: string) => async (dispatch:any) => {
    let response:any = await apiRegister(username, password, email)
    let body = await response
    if(body.status === 200 || body.status === 201) {
        dispatch({
            type:registerTypes.SUCCESSFUL_REGISTER,
            payload:{
                registerMessage: "You have successfully registered!"
            }
        })
    }else {
        dispatch({
            type:registerTypes.UNSUCCESSFUL_REGISTER,
            payload: {
                registerMessage: "Sorry, that username is already taken."
            }
        })
    }
}