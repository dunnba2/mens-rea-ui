import { connect } from "react-redux";
import { IState } from "../../reducers";
import { getAllWatchList } from "../../action-mappers/watchlist-actions";
import { WatchListComponent } from "./WatchListComponent";

const mapStateToProps = (state:IState) => {
    return {
        user:state.userState.currentUser,
        watchList:state.watchListState.watchList,
        watchListMessage:state.watchListState.watchListMessage
    }
}

const mapDispatchToProps = {
    getAllWatchList
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchListComponent)