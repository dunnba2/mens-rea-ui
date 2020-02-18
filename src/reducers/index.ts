import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";
import { imdbReducer } from "./imdb-search-reducer";
import { iDreamStateReducer } from "./idream-state-reducer";
import { iFavoriteStateReducer } from "./favorite-state-reducer";
import { mediaReducer } from "./media-reducer";

export interface IUserState {
    currentUser:any
    loginMessage:string
    loggedIn:boolean
}

export interface IMediaState{ 
    searchResults:any[],
    searchTerm:string,
    page:number,
    type:any
}

export interface INewMediaState{
    addFavMedia:string
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

export interface IFavoriteState{
    favorites:any[]
}

export interface IState {
    userState : IUserState
    registerState : IRegisterState
    imdbState : IImdbSearchState
    iDreamState: IDreamState
    iFavoriteState: IFavoriteState
    mediaState: IMediaState
    newMedia: INewMediaState
}

// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    registerState:registerReducer,
    imdbState:imdbReducer,
    iDreamState:iDreamStateReducer,
    iFavoriteState:iFavoriteStateReducer,
    mediaState:mediaReducer,
    newMedia: newMediaReducer 
})