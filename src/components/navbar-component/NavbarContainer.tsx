import { logoutUser } from '../../action-mappers/login-actions';
import { connect } from 'react-redux';
import { IState } from '../../reducers'
import { NavbarComponent } from './NavbarComponent'


const mapStateToProps = (state:IState) => {
    return {
        loggedIn:state.userState.loggedIn,
        logoutMessage:state.userState.logoutMessage
    }
}

const mapDispatchToProps = {
    logoutUser
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)