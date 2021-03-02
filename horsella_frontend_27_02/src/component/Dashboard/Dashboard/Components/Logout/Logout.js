import React from 'react'
import { tokenUnset } from '../redux/login/loginActions'
import {connect} from 'react-redux';

function Logout({tokenUnset,history}) {
    const logout = ()=> {
        tokenUnset();
        
        history.push("/login")
    }
    return (
        <div>
        {logout()}
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
		tokenUnset: () => {
			
			return dispatch(tokenUnset())}
	}
}

export default connect(null,mapDispatchToProps)(Logout);
