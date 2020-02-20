import { IUserState } from "."
import { loginTypes } from "../action-mappers/login-actions";


const initialState:IUserState = {
    currentUser:null,
    loginMessage:'',
    loggedIn:false,
    logoutMessage:''
}

export const loginReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                currentUser:action.payload.currentUser,
                loginMessage: 'You have logged in',
                loggedIn: true
            }
        }
        case loginTypes.UNSUCCESSFUL_LOGIN:{
            return {
                ...state,
                loginMessage:action.payload.loginMessage,
                loggedIn: false
            }
        }
        case loginTypes.USER_LOGOUT:{
            return {
                ...state,
                currentUser: null,
                loggedIn: false,
                logoutMessage: 'Logout Successful'
            }
        }
        default:
            return state;
    }
}