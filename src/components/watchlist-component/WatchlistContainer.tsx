import { connect } from "react-redux";
import { WatchlistComponent } from "./WatchlistComponent";
import { IState } from "../../reducers";
import { getAllWatchlist } from "../../action-mappers/watchlist-actions"

const mapStateToProps = (state:IState) => {
    return{
        watchlist:state.watchlistState.watchlists,
        user:state.userState.currentUser,
        media:state.mediaState.searchResults
    }
}

const mapDispatchToProps = {
    getAllWatchlist
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistComponent)