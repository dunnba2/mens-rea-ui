import { connect } from "react-redux";
import { IState } from "../../reducers";
import { MediaComponent } from "./MediaComponent";
import { getNewPageMediaResults, changeMediaResultsPage, getAllMedia, getNextPageMediaResults } from "../../action-mappers/media-actions"

const mapStateToProps = (state: IState) => {
    return {
        searchResults: state.mediaState.searchResults,
        searchTerm: state.mediaState.searchTerm,
        page: state.mediaState.page,
        type: state.mediaState.type
    }
}
const mapDispatchToProps = {
    getNewPageMediaResults,
    changeMediaResultsPage,
    getAllMedia,
    getNextPageMediaResults
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaComponent)