export const stateReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE_CHECKED":
            return !state
        default:
            return state
    }
};