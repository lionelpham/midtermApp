import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { MDBCardTitle, MDBCardImage,MDBCardText,MDBBtn} from 'mdbreact';


const userinfo = ({currentuser}) => {
    
    
    return (
        <>
            <div style={{padding:"20px",boxShadow:"3px 3px 10px 1px rgba(0,0,0,0.2)",textAlign:"center",width:"200px"}}>
                <MDBCardImage style={{borderRadius:"50%", width:"100px",height:"100px",margin:"0px auto"}} src= {currentuser.imgAvatar ? currentuser.imgAvatar: 'user.png' } waves />                
                <MDBCardTitle style={{marginTop:"10px",fontSize:"20px",fontWeight:"bold"}}>{currentuser.fullname}</MDBCardTitle>
                <MDBCardText><h5 style={{color:"red",fontWeight:"bold"}}>Player: X</h5></MDBCardText>
            </div>
            <Link to="/">
                <MDBBtn style={{width:"200px",height:"50px",margin:"0",marginTop:"20px",padding:'0'}}>Back to Home Page</MDBBtn>
            </Link>
        </>
        );
    
}

export default userinfo;
