import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERR,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    UPDATING_PROFILE,
    UPDATED_PROFILE,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAIL,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_GOOGLE_SUCCESS,
    LOGIN_GOOGLE_FAIL,
    LOGIN_FACEBOOK_FAIL

} from '../constants'

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading:false,
    user:null,
    isChangePassword:false,
    isLogin:null,
    isUpdating:false,
    isUpdated: false,
    isRegisterNew: false
}
const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case LOGIN_GOOGLE_SUCCESS:
            return{
                isLogin:true,
                isAuthenticated:true,
                user: action.payload
            }

        case UPLOAD_IMAGE_SUCCESS:
            return{
                ...state,
                ...action.payload,
                user : action.payload.user
            }
        case UPLOAD_IMAGE_FAIL:
            return{
                ...state
            }
        case UPDATING_PROFILE:
            return{
                ...state,
                isUpdating:true
            }
        case UPDATED_PROFILE:
            return{
                ...state,
                isUpdated:true,
                isUpdating:false,
                isAuthenticated:true,
                user: action.payload.user,
                isLogin:true
                
            }
        case CHANGE_PASSWORD_SUCCESS:
            localStorage.removeItem('token')
            return{
                ...state,
                ...action.payload,
                isAuthenticated:null,
                isChangePassword:true,
                isLogin:false,
                user:null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading:false,
                isLogin:true,
                user:action.payload.currentuser,
                isRegisterNew:false
            }
        case REGISTER_SUCCESS:
            // localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: false,
                isLoading:false,
                isLogin:false,
                isRegisterNew:true
                
            }
        case REGISTER_FAIL:        
        case AUTH_ERR: 
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false,
                isLogin:false,
                isRegisterNew:false
            }

        case USER_LOADED: return{
            ...state,
            isLoading:false,
            isAuthenticated:true,
            isLogin:true,
            user: action.payload.user,
        }
        case USER_LOADING: return{
            ...state,
            isLoading:true
        }
        default: return state;
    }
}

export default authReducer;