export default appHeaderLabel = (state = 'Home', action) => {
    if(action.value)
        return action.value
    else 
        return state
}