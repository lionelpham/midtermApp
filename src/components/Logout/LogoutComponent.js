import React, { Component } from 'react';
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {logout} from '../../actions/authActions'

/*eslint-disable */
class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    static propTypes = {
        logout: propTypes.func
    }
    render() {
        return (
            <>
                <MDBBtn color="danger" onClick={this.props.logout}>Log out</MDBBtn>
            </>
        );
    }
}


export default connect(null,{logout})(LogoutComponent);