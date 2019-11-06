import React, { Component } from 'react';
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import {uploadAvatar} from '../../actions/authActions'

/*eslint-disable*/
class ModalPage extends Component {
    constructor(props) {
        super(props);
        
    }
    
    state = {
        modal: false,
        imgAvatar: this.props.currentuser.imgAvatar
    }
    static propTypes = { 
        currentuser : propTypes.object,
        uploadAvatar: propTypes.func
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onHandleFile = (e) => {
        this.setState({
            imgAvatar: e.target.files[0]
        })
    }
    onSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            modal: !this.state.modal
        });
        
        let formdata = new FormData()
        const filesImported = this.state.imgAvatar;
        formdata.append('avatar',filesImported)

        for (var key of formdata.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        console.log('form',formdata)
        this.props.uploadAvatar(formdata);
    
    }
    render() {
    return (
        <MDBContainer>
        <MDBBtn onClick={this.toggle}>Upload Avatar</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            
            <MDBModalBody>
            <form onSubmit = {this.onSubmit}>
                <p className="h5 text-center mb-4">Upload Your Avatar</p>
                <div className="grey-text">
                    <MDBInput
                    name="avatar"
                    group
                    type="file"
                    accept="image/*"
                    validate
                    onChange = {this.onHandleFile}
                    />
                </div>
                <div className="text-center">
                    <MDBBtn color="primary" type="submit">Update</MDBBtn>
                </div>
            </form>
            </MDBModalBody>
        </MDBModal>
        </MDBContainer>
        );
    }
}

const mapStateToProps = state => ({
    currentuser : state.auth.user
})

export default connect(mapStateToProps,{uploadAvatar})(ModalPage);