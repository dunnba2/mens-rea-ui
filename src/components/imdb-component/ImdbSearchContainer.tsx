import { connect } from "react-redux";
import { IState } from "../../reducers";
import { changeImdbSearchTitlesPage, getNewPageImdbSearchTitles, getMysteryTitles } from "../../action-mappers/imdb-search-actions"
import { ImdbSearchComponent } from "./ImdbSearchComponent";

const mapStateToProps = (state:IState) => {
    return {
        imdbTitles:state.imdbState.imdbTitles,
        search:state.imdbState.search,
        page:state.imdbState.page
    }
}

const mapDispatchToProps = {
    getNewPageImdbSearchTitles,
    changeImdbSearchTitlesPage,
    getMysteryTitles
}

export default connect(mapStateToProps, mapDispatchToProps)(ImdbSearchComponent)