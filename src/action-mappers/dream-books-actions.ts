import {iDreamLoadFeaturedBook} from "../remote/idream-book-clients/idream-book-feature-book"
export const dreamBooksSearch={
    GET_RECOMMENDATIONS:"DREAMBOOKS_GET_RECOMMENDATIONS"
}
export const getRecommendedTitles=()=>async(dispatch:any)=>{
    let books=(await(iDreamLoadFeaturedBook()))
    dispatch({
        type:dreamBooksSearch.GET_RECOMMENDATIONS,
        payload:{
            recommendedBooks:books
        }
    })
}