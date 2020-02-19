import { connect } from "react-redux";
import { IState } from "../../reducers";
import { loadMysteryTitles, getNextLoadPage, newBookSearch, nextPageNewBookSearch } from "../../action-mappers/google-book-actions"
import { GoogleBookComponent } from "./GoogleBookComponent";

const mapStateToProps = (state:IState) => {
    return {
        bookResults:state.googleBookState.bookResults,
        search:state.googleBookState.search,
        page:state.googleBookState.page
    }
}

const mapDispatchToProps = {
    loadMysteryTitles,
    getNextLoadPage,
    newBookSearch,
    nextPageNewBookSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBookComponent)