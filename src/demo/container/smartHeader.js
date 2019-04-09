import {connect} from '../myRedeux/connect'
import DumbHeader from '../components/DumbHeader'
const mapStateToProps=(state)=>{
    return{
     ...state
    }
};
export const SmartHeader=connect(mapStateToProps)(DumbHeader);

