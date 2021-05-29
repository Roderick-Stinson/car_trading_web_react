import cookie from 'react-cookies'

export const getToken = () => {
    return cookie.load('userInfo')
}

export const setToken = (token) => {
    cookie.save('userInfo', token, { path: '/' })
}

export const removeToken = () => {
    cookie.remove('userInfo', { path: '/' })
    window.location.href = '/'
}
