import { connect } from "react-redux";
import {MediaDisplayComponent} from "./MediaDisplayComponent";


const mapStateToProps = (state:IState) => {
    return{
        addFavMedia:state.addMediaState.addFavState
    }
}

const mapDispatchToProps = {
    createNewMedia
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaDisplayComponent)