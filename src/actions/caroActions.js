import {
    SETTING,
    TOGGLE_PLAYER_IS_NEXT,
    CHANGE_STEP,
    CLICK_SQUARE,
    AUTO_CLICK_SQUARE,
    SORT_MOVES} from '../constants'

export const setting = (width, height) =>
    ({
        type: SETTING,
        width,
        height
    })


export const toggleXIsNext = () => 
    ({
        type: TOGGLE_PLAYER_IS_NEXT,
    })


export const changeStep = (step) => dispatch => {
    dispatch({
        type: CHANGE_STEP,
        step
    })
}

export const addHistory = (i, j) => dispatch => {
    dispatch({
        type: CLICK_SQUARE,
        i,
        j
    })
}

export const clickSquare = (history,isAuto) => dispatch => {
    
        dispatch({
            type: CLICK_SQUARE,
            history
        })
    
    
}