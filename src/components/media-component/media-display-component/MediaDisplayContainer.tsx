import {connect} from "react-redux";
import {IState} from "../../../reducers";
import {MediaDisplayComponent} from "./MediaDisplayComponent";

const mapStateToProps=(state:IState)=>{
    return{
        user:state.userState.currentUser,
        loggedIn:state.userState.loggedIn
    }
}
export default connect(mapStateToProps)(MediaDisplayComponent)