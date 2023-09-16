import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER}  from './types'

const iniitialState = {
    count: 370
}
const subcribersReducers = (state = iniitialState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE_SUBSCRIBER:
            return {
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}

export default subcribersReducers