import { IRegisterState } from ".";
import { registerTypes } from "../action-mappers/register-actions";

const initialState:IRegisterState = {
    registerMessage: ''
}

export const registerReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case registerTypes.SUCCESSFUL_REGISTER:{
            return {
                ...state,
                registerMessage: 'Registration successful'
            }
        }
        case registerTypes.UNSUCCESSFUL_REGISTER: {
            return {
                ...state,
                registerMessage:action.payload.registerMessage
            }
        }
        default:
            return state;
    }
}