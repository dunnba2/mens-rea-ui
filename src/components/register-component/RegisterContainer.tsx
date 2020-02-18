import { connect } from "react-redux";
import { RegisterComponent } from "./RegisterComponent";
import { IState } from '../../reducers';
import { createNewUser } from '../../action-mappers/register-actions';

const mapStateToProps = (state:IState) => {
    return {
        registerMessage:state.registerState.registerMessage,
        registered:state.registerState.registered
    }
}

const mapDispatchToProps = {
    createNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)