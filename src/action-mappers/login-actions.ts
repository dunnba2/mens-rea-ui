import { apiLogin } from "../remote/mens-rea-app/mens-rea-login-clients"


export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN'
}

export const updateCurrentUser = (username:string, password:string) => async (dispatch:any) => {
    let response:any = await apiLogin(username,password)
    if(response){
        dispatch({
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser:response.body
            }
        })
    }else {
        dispatch({
            type:loginTypes.UNSUCCESSFUL_LOGIN,
            payload: {
                loginMessage:response.loginMessage
            }
        })
    }
}