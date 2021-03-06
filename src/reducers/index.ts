import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";
import { imdbReducer } from "./imdb-search-reducer";
import { iDreamStateReducer } from "./idream-state-reducer";
import { iFavoriteStateReducer } from "./favorite-state-reducer";
import { mediaReducer } from "./media-reducer";
import { googleBookReducer } from "./google-book-reducer";
import { watchListReducer } from "./watchlist-reducer";


export interface IUserState {
    currentUser:any
    loginMessage:string
    loggedIn:boolean,
    logoutMessage:string
}

export interface IMediaState{ 
    searchResults:any[],
    searchTerm:string,
    page:number,
    type:any
}

export interface IGooogleBookState {
    bookResults:any[]
    search:any
    page:number
}

export interface IRegisterState {
    registerMessage:string
    registered: boolean
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
    favoritesMessage: string
}

export interface IWatchListState{
    watchList:any[]
    watchListMessage:string
}

export interface IState {
    userState : IUserState
    registerState : IRegisterState
    imdbState : IImdbSearchState
    iDreamState: IDreamState
    iFavoriteState: IFavoriteState
    mediaState: IMediaState
    googleBookState: IGooogleBookState 
    watchListState: IWatchListState   
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
    googleBookState:googleBookReducer,
    watchListState:watchListReducer 
})