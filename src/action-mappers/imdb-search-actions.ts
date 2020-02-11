import { imdbSearch } from "../remote/imdb-clients/imdb-search"


export const imdbSearchTypes = {
    NEW_PAGE_IMDB_SEARCH_TITLES: 'IMDB_NEW_PAGE_IMDB_SEARCH_TITLES',
    INCREMENT_IMDB_SEARCH_TITLES_PAGE: 'IMDB_INCREMENT_IMDB_SEARCH_TITLES_PAGE'
}

export const getNewPageImdbSearchTitles = (search:string, page:number) => async (dispatch:any) => {
    let titles = (await imdbSearch(search, page)).results
    dispatch({
        type: imdbSearchTypes.NEW_PAGE_IMDB_SEARCH_TITLES,
        payload:{
            imdbTitles:titles
        }
    })
}

export const changeImdbSearchTitlesPage = (search:string, page:number) => {
    return {
        type: imdbSearchTypes.INCREMENT_IMDB_SEARCH_TITLES_PAGE,
        payload:{
            page
        }
    }
}