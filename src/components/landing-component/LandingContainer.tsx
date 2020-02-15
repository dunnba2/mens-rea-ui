import {connect} from "react-redux";
import { LandingComponent } from "./LandingComponent";
import { IState } from "../../reducers";

const mapStateToProps=(state:IState)=> {

}
const mapDispatchToProps={
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent)