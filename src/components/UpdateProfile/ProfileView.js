import React from 'react';
import {connect} from'react-redux'
import propTypes from 'prop-types'  
// import propTypes from 'prop-types'
import { MDBContainer, MDBModal, MDBModalBody, MDBInput, MDBBtn,MDBCardImage } from 'mdbreact';
import {updateProfile} from '../../actions/authActions'
import './profile.css';



const publicDefaultImg  = `${process.env.PUBLIC_URL}/user.png`;


/* eslint-disable */ 
class ProfileView extends React.Component {
        
    state = { 
        modal: false,
        fullname: this.props.currentuser.fullname,
        email: this.props.currentuser.email,
        username: this.props.currentuser.username,
        imgAvatar:this.props.currentuser.imgAvatar
    }
    static propTypes = {
        currentuser: propTypes.object,
        updateProfile:propTypes.func
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
        const {fullname,email,username} = this.state
        const updateUser = {fullname,email,username}
        console.log(updateUser)
        this.props.updateProfile(updateUser)

    }
    render(){
        return(
        <>
            <MDBContainer>
                <MDBBtn onClick={this.toggle} color="success">Update Your Profile</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalBody>
                        <MDBCardImage style={{borderRadius:"50%", width:"200px",height:"200px",margin:"50px auto"}} src={this.state.imgAvatar? this.state.imgAvatar : publicDefaultImg} waves />
                        <form onSubmit = {this.onSubmit} class="formUpdateProfile">
                            <p className="h5 text-center mb-4">Update Your Profile</p>
                            <div className="grey-text">
                                <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                valueDefault = {this.state.fullname}
                                name="fullname"
                                error="wrong"
                                success="right"
                                onChange = {this.onChange}
                                />
                                <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                
                                type="email"
                                validate
                                name="email"
                                error="wrong"
                                success="right"
                                onChange = {this.onChange}
                                valueDefault={this.state.email} 
                                />
                                <MDBInput
                                label="Your username"
                                
                                icon="signature"
                                group
                                type="text"
                                name="username"
                                validate
                                error="wrong"
                                success="right"
                                valueDefault={this.state.username}
                                disabled                        
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" type="submit">Update</MDBBtn>
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
    currentuser : state.auth.user
})

export default connect(mapStateToProps,{updateProfile})(ProfileView);
