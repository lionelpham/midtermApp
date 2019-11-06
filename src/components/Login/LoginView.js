import React from 'react';
import {connect} from 'react-redux'
import {Link} from'react-router-dom'
import  propTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBNavLink} from 'mdbreact';
import './login.css';
import {login,loginGoogle,loadUser} from '../../actions/authActions'
import {clearErrors} from '../../actions/authActions'

/* eslint-disable */
class LoginView extends React.Component {
    constructor(props) {
        super(props);
        
    }
    state = { 
        username:'',
        password:'',
        msg:null
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    onLoginGoogle = (e) => {
        // this.props.loginGoogle();
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {username,password} = this.state
        const account = {username,password}
        this.props.login(account)
    }
    
    static propTypes = {
        isAuthenticated: propTypes.bool,
        login : propTypes.func,
        loginGoogle: propTypes.func
    }
    render(){
        return(
        <>
            <MDBContainer className="to-center-component">
                <MDBRow>
                    {this.state.msg ? <MDBAlert color="primary" >this.state.msg</MDBAlert>:null}
                    <MDBCol md="6" className="margin-auto">
                    <form onSubmit={this.onSubmit}>
                        <p className="h2 text-center mb-4">Login</p>
                        <div className="grey-text">
                            
                        <MDBInput
                            label="Type your username"
                            icon="signature"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            required
                            name="username"
                            onChange = {this.onChange}
                        />
                        <MDBInput
                            label="Type your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            required
                            name="password"
                            onChange = {this.onChange}
                        />
                        </div>
                        <div className="text-center">
                            <MDBBtn type="submit">Login</MDBBtn>
                            <p className="mt-3">Or <Link to="/register">Register here !</Link></p>
                            <p>Or Login With</p>
                        </div>
                    </form>
                        <div className="text-center">
                            <MDBBtn className="custom-social" color="blue" ><i className="fab fa-facebook-f"></i></MDBBtn>
                            <MDBBtn className="custom-social" color="red" onClick={this.onLoginGoogle}><i className="fab fa-google-plus-g"></i></MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
        )}
};

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    err : state.error
})
export default connect(mapStateToProps,{login,loginGoogle,loadUser})(LoginView)