import {SORT_MOVES} from '../../constants'

const isDes = (state = false,action) =>{
    switch(action.type){
        case SORT_MOVES:
            return action.sortMoves;
        default:
            return state;
    }
}

export default isDes;