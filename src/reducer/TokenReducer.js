const tokenReducer = (state = {Authorization: 'initial'}, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.data
        case 'REMOVE_TOKEN':
            return {Authorization: ''}
        default:
            return state
    }
}

export const setToken = (token) => {
    localStorage.setItem('Authorization', token)
    return {
        type: 'SET_TOKEN',
        data: {
            Authorization: token
        }
    }
}

export const removeToken = () => {
    localStorage.removeItem('Authorization')
    return {
        type: 'REMOVE_TOKEN',
        data: {
            Authorization: ''
        }
    }
}

export default tokenReducer