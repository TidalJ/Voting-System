import request from '../utils/request'

// 登录
export const login = (data) => {
    return request({
        method: 'POST',
        url: '/login',
        data
    })
}

// token
export const tokenGetId = (data) => {
    return request({
        method: 'POST',
        url: '/token',
        data
    })
}

// 注册
export const register = (data) => {
    return request({
        method: 'POST',
        url: '/register',
        data
    })
}

// 初始化
export const init = (data) => {
    return request({
        method: 'POST',
        url: '/init',
        data
    })
}

// 初始化
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