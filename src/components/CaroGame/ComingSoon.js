import React from 'react';
import {connect} from'react-redux'
import {Link} from 'react-router-dom'  
// import propTypes from 'prop-types'
import { MDBContainer, MDBModal, MDBModalBody, MDBInput, MDBBtn,MDBCardText } from 'mdbreact';



/* eslint-disable */ 
class ComingSoon extends React.Component {
    render(){
        return(
        <>
            <MDBContainer style={{margin:"0 auto;",boxShadow: "1px 2px 5px 1px rgba(0,0,0,0.1)",padding:"50px",textAlign:"center",position:"absolute",top:"50%",left:"50%",transform: "translate(-50%,-50%)"}}>
                <MDBCardText style={{fontSize:"30px"}}>The Feature will comming soon !</MDBCardText>
                <Link to="/">
                    <MDBBtn>
                        Back to Home Page
                    </MDBBtn>
                </Link>
            </MDBContainer>
        </>
        );
    }
}

export default ComingSoon;
