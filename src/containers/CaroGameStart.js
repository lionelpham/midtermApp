import { connect } from 'react-redux'
import { changeStep, toggleXIsNext, clickSquare} from '../actions/caroActions';
import Main from '../components/CaroGame/Main'
import {loadUser} from '../actions/authActions'

const mapStateToProps = (state,ownProps) =>({
    p_width : state.gameSetting.width,
    p_height: state.gameSetting.height,
    p_history: state.history,
    p_step : state.step,
    p_xIsNext : state.playerNext,
    p_isDes : state.isDes,
    currentuser: state.auth.user
    // p_autoClickSquare: state.autoClickSquare,

})

const mapDispatchToProps = {
    p_changeStep : changeStep,
    p_toggleXIsNext : toggleXIsNext,
    p_clickSquare : clickSquare,
    loadUser
}

const CaroGameStart = connect (
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default CaroGameStart;