import {connect} from "react-redux";
import { LandingComponent } from "./LandingComponent";
import { IState } from "../../reducers";
import {getRecommendedTitles} from "../../action-mappers/dream-books-actions"

const mapStateToProps=(state:IState)=> {
    return {
        iDreamBooks:state.iDreamState.iDreamBooks,
        user:state.userState.currentUser        
    }
}
const mapDispatchToProps={
    getRecommendedTitles    
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent)