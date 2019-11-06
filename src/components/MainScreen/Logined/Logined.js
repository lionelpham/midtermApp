import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle,MDBCardText, MDBCardImage, MDBCol } from 'mdbreact';
import Logout from '../../Logout/LogoutComponent'
import UploadAvartar from '../../uploadAvartar/uploadAvartar'
import {loadUser} from '../../../actions/authActions'
import ChangePassword from '../../ChangePassword/ChangePassword'
import ProfileView from '../../UpdateProfile/ProfileView'

const Logined = ({currentuser}) => {

    return(
        <>
            <MDBCol style={{position:"absolute",paddingTop:"30px",height:"100%"}}>
                <MDBCard style={{ width: "42rem",textAlign:"center",margin:"auto",marginBottom:"30px" }}>
                <MDBCardBody>
                    <MDBCardTitle>Welcome <strong>{currentuser.fullname} </strong>
                    <br/>to Caro Game Online Viet Nam</MDBCardTitle>
                    
                    <MDBCardImage style={{borderRadius:"50%", width:"200px",height:"200px",margin:"50px auto"}} src= {currentuser.imgAvatar ? currentuser.imgAvatar: 'user.png' } waves />
                    <UploadAvartar/>
                    <MDBCardText className="mb-5 mt-5">
                        <h2>Hello <strong>{currentuser.fullname} </strong></h2>
                    </MDBCardText>
                    <Link to="/play-computer">
                        <MDBBtn color="yellow">Play with Computer</MDBBtn>
                    </Link>
                    <Link to="/play-online">
                        <MDBBtn color="green">Find Competitor</MDBBtn>
                    </Link>
                    <ChangePassword/>
                    <ProfileView/>
                    <Logout />
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    );
}

const mapStateToProps = state => ({
    currentuser : state.auth.user
})


export default connect(mapStateToProps,{loadUser})(Logined);