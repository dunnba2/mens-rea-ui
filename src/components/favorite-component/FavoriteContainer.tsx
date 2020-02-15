import { connect } from "react-redux";
import { FavoriteComponent } from "./FavoriteComponent";


const mapStateToProps = (state:userstate) => { // need to fix here test if user is logged in
    return{ 
        user:state.userState.currentUser,
        allFavorite: state.favoriteState
    }
}

const mapDispatchToProps = {
    getAllFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)