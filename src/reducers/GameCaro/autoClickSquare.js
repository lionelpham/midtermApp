import {AUTO_CLICK_SQUARE} from '../../constants'

const autoClickSquare = (state = false, action) => {
    switch (action.type) {
        case AUTO_CLICK_SQUARE:
            return !state;
        default:
            return state;
    }
}
export default autoClickSquare