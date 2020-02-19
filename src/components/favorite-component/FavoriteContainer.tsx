import { connect } from "react-redux";
import { FavoriteComponent } from "./FavoriteComponent";
import { IState } from "../../reducers";
import { getAllFavoriteList,getAllFavoritesByType, removeItemFromFavorite } from "../../action-mappers/favorite-action";

const mapStateToProps = (state:IState) => { // need to fix here test if user is logged in
    return{ 
        favorite:state.iFavoriteState.favorites,
        user:state.userState.currentUser,
        media:state.mediaState.searchResults
    }
}

const mapDispatchToProps = {
    getAllFavoriteList,
    getAllFavoritesByType,
    removeItemFromFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)