import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {MDBBtn,MDBInput,MDBContainer,MDBModal,MDBModalBody} from 'mdbreact'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {changePassword} from '../../actions/authActions'
import './center.css'

/*eslint-disable*/
class ChangePassword extends Component {
    constructor(props) {
        super(props);
        
    }
    state = { 
        modal: false,
        newpassword:''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
        const {newpassword} = this.state
        const updatePassword = {newpassword}
        this.props.changePassword(updatePassword)
    }
    render() {
        return (
            <>
            <MDBContainer>
            <MDBBtn onClick={this.toggle}>Change Password</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalBody>
                <form onSubmit={this.onSubmit} className="formPassword">
                    <p className="h5 text-center mb-4">Update Your Password</p>
                    <div className="grey-text">
                        <MDBInput
                        label="New Password"
                        icon="lock"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="newpassword"
                        onChange = {this.onChange}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn color="primary" type="submit">Update</MDBBtn>
                        {this.props.isChangePassword ? <Redirect to="/login"/>: ''}
                    </div>
                </form>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
        </>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    isChangePassword:state.auth.isChangePassword
})


export default connect(mapStateToProps,{changePassword})(ChangePassword);