import { imdbSearch, imdbLoadPage } from "../remote/imdb-clients/imdb-search"


export const imdbSearchTypes = {
    GET_FIRST_PAGE_SEARCH_TITLES: 'IMDB_GET_FIRST_PAGE_SEARCH_TITLES',
    GET_NEXT_PAGE_SEARCH_TITLES: 'IMDB_GET_NEXT_PAGE_SEARCH_TITLES',
    NEW_PAGE_IMDB_SEARCH_TITLES: 'IMDB_NEW_PAGE_IMDB_SEARCH_TITLES',
    INCREMENT_IMDB_SEARCH_TITLES_PAGE: 'IMDB_INCREMENT_IMDB_SEARCH_TITLES_PAGE'
}

export const getMysteryTitles = () => async (dispatch:any) => {
    let titles = (await imdbLoadPage())
    dispatch({
        type:imdbSearchTypes.GET_FIRST_PAGE_SEARCH_TITLES,
        payload:{
            imdbTitles:titles
        }
        
    })
}

export const getNextPageImdbSearch = (search:any, page:number) => async (dispatch:any) => {
    let titles = (await imdbSearch(search, page))
    dispatch({
        type: imdbSearchTypes.GET_NEXT_PAGE_SEARCH_TITLES,
        payload:{
            imdbTitles:titles
        }
    })
}

export const getNewPageImdbSearchTitles = (newSearch:any, page:number) => async (dispatch:any) => {
    let titles = (await imdbSearch(newSearch, page))
    dispatch({
        type: imdbSearchTypes.NEW_PAGE_IMDB_SEARCH_TITLES,
        payload:{
            imdbTitles:titles,
            search:newSearch,
            page:page
        }
    })
}

export const changeImdbSearchTitlesPage = (search:any, page:number) => {
    return {
        type: imdbSearchTypes.INCREMENT_IMDB_SEARCH_TITLES_PAGE,
        payload:{
            page  
        }
    }
}