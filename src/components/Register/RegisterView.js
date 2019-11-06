import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
// import {Spin} from 'antd'
import propTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './register.css';
import {register} from '../../actions/authActions'

/*eslint-disable */
class RegisterView extends React.Component {
    constructor(props) {
        super(props);
    }
    static state = { 
        fullname:'',
        email:'',
        username:'',
        password:'',
        msg:''
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const {fullname,email,username,password} = this.state
        const newUser = {fullname,email,username,password}
        this.props.register(newUser)
    }
    
    static propTypes = {
        isAuthenticated: propTypes.bool,
        register : propTypes.func
    }


    render() {
        
        
        return (
        <>
            <MDBContainer className="to-center-component">
                <MDBRow>
                    <MDBCol md="6" className="margin-auto">
                        <form onSubmit = {this.onSubmit}>
                            <p className="h5 text-center mb-4">Register</p>
                            <div className="grey-text">
                                <MDBInput
                                label="Your name"
                                icon="user"
                                name="fullname"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                required
                                onChange={this.onChange}
                                />
                                <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                name="email"
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                onChange = {this.onChange}
                                required                        
                                />
                                <MDBInput
                                label="Your username"
                                icon="signature"
                                group
                                name="username"
                                type="text"
                                validate
                                error="wrong"
                                onChange = {this.onChange}
                                success="right"
                                required                        
                                />
                                <MDBInput
                                label="Your password"
                                icon="lock"
                                name="password"
                                group
                                onChange = {this.onChange}
                                type="password"
                                validate
                                required                        
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" type="submit">Register</MDBBtn>
                                {this.props.isRegisterNew ? <Redirect to='/login'/> : ''}
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    isRegisterNew : state.auth.isRegisterNew
})

export default connect(mapStateToProps,{register})(RegisterView);
