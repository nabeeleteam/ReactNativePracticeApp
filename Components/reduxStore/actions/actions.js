export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const updatelabel = (value) => {
    return {
        type: 'UPDATELABEL',
        value
    }
}

export const showCameraIcon = (flag) => {
    return {
        type: 'SHOWCAMERAICON',
        flag
    }
}