import { connect } from "react-redux";
import { FavoriteComponent } from "./FavoriteComponent";
import { IState } from "../../reducers";
import { getAllFavoriteList } from "../../action-mappers/favorite-action";

const mapStateToProps = (state:IState) => { // need to fix here test if user is logged in
    return{ 
        favorites:state.iFavoriteState.favorites,
        user:state.userState.currentUser,
        favoritesMessage:state.iFavoriteState.favoritesMessage
    }
}

const mapDispatchToProps = {
    getAllFavoriteList
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)