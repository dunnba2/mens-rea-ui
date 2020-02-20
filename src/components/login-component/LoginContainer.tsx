import { updateCurrentUser, logoutUser } from '../../action-mappers/login-actions';
import { connect } from 'react-redux';
import { LoginComponent } from './LoginComponent';
import { IState } from '../../reducers';


const mapStateToProps = (state:IState) => {
    return {
        loginMessage:state.userState.loginMessage,
        loggedIn:state.userState.loggedIn,
        currentUser:state.userState.currentUser,
        logoutMessage:state.userState.logoutMessage
    }
}

const mapDispatchToProps = {
    updateCurrentUser,
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)