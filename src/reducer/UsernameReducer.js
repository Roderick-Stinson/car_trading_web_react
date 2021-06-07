import storage from "sweet-storage";

const usernameReducer = (state = {Username: 'None'}, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.date;
        case 'REMOVE_USERNAME':
            return {Username: ''}
        default:
            return state
    }
}

export const setUsername = (name) => {
    storage.save('Username', name, 1440000)

    return {
        type: 'SET_USERNAME',
        data: {
            Username: name
        }
    }
}

export const removeUsername = () => {
    storage.remove('Username')
    return {
        type: 'REMOVE_USERNAME',
        data: {
            Username: ''
        }
    }
}

export default usernameReducer