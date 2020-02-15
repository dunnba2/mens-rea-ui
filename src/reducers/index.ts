import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";
import { imdbReducer } from "./imdb-search-reducer";
import { iDreamStateReducer } from "./iDreamStateReducer";

export interface IUserState {
    currentUser:any
    loginMessage:string
}

export interface IRegisterState {
    registerMessage:string
}

export interface IImdbSearchState {
    imdbTitles:any[]
    search:any
    page:number
}

export interface IDreamState {
    iDreamBooks:any[]
}
export interface IState {
    userState : IUserState
    registerState : IRegisterState
    imdbState : IImdbSearchState
    iDreamState: IDreamState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    registerState:registerReducer,
    imdbState:imdbReducer,
    iDreamState:iDreamStateReducer
})