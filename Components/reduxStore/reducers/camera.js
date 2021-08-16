export default cameraIcon = (state = false, action) => {
    switch(action.type) {
        case 'SHOWCAMERAICON':
            return !state
        default:
            return false
    }
}