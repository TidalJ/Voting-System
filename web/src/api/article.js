import request from '../utils/request'

// 添加调查
export const articleAdd = (data) => {
    return request({
        url: '/article/add',
        method: 'POST',
        data
    })
}
// 调查列表
export const articleList = (data) => {
    return request({
        url: '/article/list',
        method: 'POST',
        data
    })
}
// 调查详情信息
export const articleDetails = (data) => {
    return request({
        url: '/article/details',
        method: 'POST',
        data
    })
}

// 选择投票
export const articleCheckoption = (data) => {
    return request({
        url: '/article/checkoption',
        method: 'POST',
        data
    })
}

// 已回答
export const articleAnswered = (data) => {
    return request({
        url: '/article/answered',
        method: 'POST',
        data
    })
}

// 未回答
export const articleUnanswered = (data) => {
    return request({
        url: '/article/unanswered',
        method: 'POST',
        data
    })
}

// 用户排序
export const articleRanking = (data) => {
    return request({
        url: '/article/ranking',
        method: 'POST',
        data
    })
}
