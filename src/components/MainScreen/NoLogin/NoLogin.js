import React from 'react';
import {Link} from 'react-router-dom'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const NoLogin = () =>(
    <>
        <MDBCol style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
            <MDBCard style={{ width: "42rem",textAlign:"center",margin:"auto" }}>
            <MDBCardBody>
                <MDBCardTitle>Welcome to Caro Game Online Viet Nam</MDBCardTitle>
                <MDBCardText style={{textAlign: "center",color:"red",fontSize:"18",fontWeight:"bold"}} >
                    Please,You Must be Login to Begin !
                </MDBCardText>
                <Link to="/login">
                    <MDBBtn>Login</MDBBtn>
                </Link>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </>
);
export default NoLogin;