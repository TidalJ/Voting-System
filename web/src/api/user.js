import request from '../utils/request'

// Login
export const login = (data) => {
    return request({
        method: 'POST',
        url: '/login',
        data
    })
}

// Token
export const tokenGetId = (data) => {
    return request({
        method: 'POST',
        url: '/token',
        data
    })
}

// Register
export const register = (data) => {
    return request({
        method: 'POST',
        url: '/register',
        data
    })
}

// Initialization
export const init = (data) => {
    return request({
        method: 'POST',
        url: '/init',
        data
    })
}

// Init
export const changeAvatar = (data) => {
    return request({
        method: 'POST',
        url: '/avatar',
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        data
    })
}