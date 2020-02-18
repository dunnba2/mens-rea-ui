import { connect } from "react-redux";
import { FavoriteComponent } from "./FavoriteComponent";
import { IState } from "../../reducers";
import { getAllFavoriteList } from "../../action-mappers/favorite-action";

const mapStateToProps = (state:IState) => { // need to fix here test if user is logged in
    return{ 
        favorite:state.iFavoriteState.favorites,
        user:state.userState.currentUser,
        media:state.mediaState.searchResults
    }
}

const mapDispatchToProps = {
    getAllFavoriteList
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)