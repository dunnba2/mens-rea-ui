import {connect} from "react-redux";
import { LandingComponent } from "./IDreamBookComponent";
import { IState } from "../../reducers";
import {getRecommendedTitles} from "../../action-mappers/idream-book-actions"

const mapStateToProps = (state:IState) => {
    return {
        iDreamBooks:state.iDreamState.iDreamBooks,
        user:state.userState.currentUser,
        loggedIn:state.userState.loggedIn       
    }
}
const mapDispatchToProps = {
    getRecommendedTitles    
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent)