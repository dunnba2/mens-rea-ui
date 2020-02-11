import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";
import { imdbReducer } from "./imdb-search-reducer";

export interface IUserState {
    currentUser:any
    loginMessage:string
}

export interface IRegisterState {
    registerMessage:string
}

export interface IImdbSearchState {
    imdbTitles:any[]
    page:number
}

export interface IState {
    userState : IUserState
    registerState : IRegisterState
    imdbState : IImdbSearchState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    registerState:registerReducer,
    imdbState:imdbReducer
   
})