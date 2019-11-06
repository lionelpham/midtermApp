import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import LoginView from '../components/Login/LoginView';
import RegisterView from '../components/Register/RegisterView';
import ProfileView from '../components/UpdateProfile/ProfileView';
import NoLogin from '../components/MainScreen/NoLogin/NoLogin';
import Logined from '../components/MainScreen/Logined/Logined';
import ChangePassword from '../components/ChangePassword/ChangePassword'
import CaroGameStart from './CaroGameStart';
import ComingSoon from '../components/CaroGame/ComingSoon'
import {loadUser} from '../actions/authActions'
/*eslint-disable*/

class MainApp extends Component {
    constructor(props) {
        super(props);
        
    }
    
    static propTypes = {
        //loadUser:propTypes.func,
        isLogin:propTypes.bool
    }
    componentDidMount(){
        this.props.loadUser()
    }
    render() {
        return (
            <>
                
                <Router>
                    <Switch>
                        <Route path="/play-online">
                            <ComingSoon/>
                        </Route>
                        <Route path="/play-computer">
                            <CaroGameStart />
                        </Route>
                        <Route path="/register">
                            {this.props.isLogin ? <Redirect to='/' /> : <RegisterView /> }
                        </Route>
                        <Route path="/profile/update">
                            <ProfileView/>
                        </Route>
                        <Route path="/profile/change-password">
                            <ChangePassword/>
                        </Route>
                        <Route path="/login">
                            {this.props.isLogin ? <Redirect to='/' /> : <LoginView /> }
                        </Route>

                            {console.log('main',this.props.isLogin)}
                        <Route path="/">
                        {

                            this.props.isLogin  ? <Logined/> : <NoLogin /> 
                        }
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

const mapStateToProps = (state)=> ({
    
    isLogin: state.auth.isLogin
})


export default connect(mapStateToProps,{loadUser})(MainApp);