import {TOGGLE_PLAYER_IS_NEXT,CHANGE_STEP,CLICK_SQUARE,AUTO_CLICK_SQUARE} from '../../constants'

const initState = {
    isNextPlayer: true,
    isComputer:false
}

const playerNext = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_PLAYER_IS_NEXT:
            return action.playerNext.isNextPlayer;   
        case CHANGE_STEP:
            return (action.step % 2) === 0;
        case CLICK_SQUARE:
            return {
                isNextPlayer:!state.isNextPlayer,
                isComputer:!state.isComputer}; 
        default:
            return state;
    }
}

export default playerNext;