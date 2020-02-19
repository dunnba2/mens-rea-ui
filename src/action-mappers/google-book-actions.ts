import { googleBooksLoadPage, googleBookLoadNext } from '../remote/google-book-clients/google-book'


export const googleBookTypes = {
    GET_LOAD_PAGE_MYSTERY: 'GOOGLE_GET_LOAD_PAGE_MYSTERY',
    INCREMENT_LOAD_PAGE_MYSTERY: 'GOOGLE_INCREMENT_LOAD_PAGE_MYSTERY',
    NEW_BOOK_SEARCH: 'GOOGLE_NEW_BOOK_SEARCH',
    INCREMENT_NEW_BOOK_SEARCH: 'GOOGLE_INCREMENT_NEW_BOOK_SEARCH'
}

export const loadMysteryTitles = () => async (dispatch:any) => {
    let titles = (await googleBooksLoadPage())
    dispatch({
        type:googleBookTypes.GET_LOAD_PAGE_MYSTERY,
        payload:{
            bookResults:titles
        }
    })
}

export const getNextLoadPage = (search: any, page: number) => async (dispatch: any) => {
    let titles = (await googleBookLoadNext(search, page))
    dispatch({
        type: googleBookTypes.INCREMENT_LOAD_PAGE_MYSTERY,
        payload:{
            bookResults:titles
        }
    })
}

export const newBookSearch = (search:any, page:number) => async (dispatch:any) =>{
    let titles = (await googleBookLoadNext(search, page))
    dispatch({
        type: googleBookTypes.NEW_BOOK_SEARCH,
        payload:{
            bookResults: titles,
            search: search,
            page: page
        }
    })
}

export const nextPageNewBookSearch = (search:any, page:number) => {
    return {
        type: googleBookTypes.INCREMENT_NEW_BOOK_SEARCH,
        payload:{
            page  
        }
    }
}

