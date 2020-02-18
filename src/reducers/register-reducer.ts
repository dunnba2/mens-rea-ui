import { IRegisterState } from ".";
import { registerTypes } from "../action-mappers/register-actions";

const initialState:IRegisterState = {
    registerMessage: '',
    registered: false
}

export const registerReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case registerTypes.SUCCESSFUL_REGISTER:{
            return {
                ...state,
                registerMessage: action.payload.registerMessage,
                registered: true
            }
        }
        case registerTypes.UNSUCCESSFUL_REGISTER: {
            return {
                ...state,
                registerMessage:action.payload.registerMessage,
                registered: false
            }
        }
        default:
            return state;
    }
}