import axios from 'axios';
import {returnErrors,clearErrors} from './errActions'

import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERR,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    UPDATING_PROFILE,
    UPDATED_PROFILE,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAIL,
    LOGIN_GOOGLE_SUCCESS,
    CLEAR_ERRORS
} from '../constants'

export const loginGoogle = () => (dispatch) => {
    axios.get('https://api-midterm.herokuapp.com/login/google')
        .then(res => dispatch({
            type:LOGIN_GOOGLE_SUCCESS,
            payload: res.data
        }))
        .catch(err =>console.log(err))
}


export const tokenConfig = getState => {
    const { token } = getState().auth;
    const config = {
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }
    if(token) {
        config.headers['x-auth-token'] = token;
        
    }
    return config;
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({type:USER_LOADING})
    axios
        .get('https://api-midterm.herokuapp.com/auth/profile',tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            
            dispatch(returnErrors(err.response.data,err.response.status))            
            dispatch({
                type:AUTH_ERR,
            })
        })
}

export const changePassword = ({newpassword}) => (dispatch,getState) => {
    const bodyReq = JSON.stringify({newpassword})
    axios
        .post('https://api-midterm.herokuapp.com/auth/reset-password',bodyReq,tokenConfig(getState))
        .then(res => dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type:CHANGE_PASSWORD_FAIL,
                
            })
        })
}

export const updateProfile = ({fullname,email,username}) => (dispatch,getState) => {
    const bodyReq  = {fullname,email,username}
    axios.post('https://api-midterm.herokuapp.com/auth/update-profile',bodyReq,tokenConfig(getState))
        .then(res=>dispatch({
            type:UPDATED_PROFILE,
            payload:res.data
        }))
        .catch(err=>{
            console.log(err)
        })
}

export const uploadAvatar = (formData) => (dispatch,getState) => {
    const {token} = getState().auth;
    const {currentuser} = getState().auth;
    const config = {
        headers: {
            'Content-type' : 'multipart/form-data',
            "Authorization" : `Bearer ${token}`
        }
    }
    if(token) {
        config.headers['x-auth-token'] = token;
        
    }
    axios.post("https://api-midterm.herokuapp.com/auth/upload-avatar",formData,config)

        .then(res => dispatch({
            type:UPLOAD_IMAGE_SUCCESS,
            payload:res.data
        }))
        .catch(err => {
            dispatch({
                type:UPLOAD_IMAGE_FAIL
            })
            console.log(err)
        })
}

export const register = ({fullname,email,username,password}) => (dispatch,getState) => {
    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }
    
    // get body

    const bodyReq = JSON.stringify({fullname,email,username,password})

    axios.post('https://api-midterm.herokuapp.com/register',bodyReq,config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch (err => {
            dispatch(returnErrors(err.response.data,err.response.status,"REGISTER_FAIL"))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const login = ({username,password}) => (dispatch) => {
    const config = {
        headers: {
            "Content-type" : "application/json",
        }
    }
    
    // get body

    const bodyReq = JSON.stringify({username,password})

    axios.post('https://api-midterm.herokuapp.com/login',bodyReq,config)
        .then(res => {
                dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
        })})
        .catch (err => {
            dispatch(returnErrors(err.response.data,err.response.status,"LOGIN_FAIL"))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    }
}
