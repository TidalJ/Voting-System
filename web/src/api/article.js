import request from '../utils/request'

// Add survey
export const articleAdd = (data) => {
    return request({
        url: '/article/add',
        method: 'POST',
        data
    })
}
// Survey list
export const articleList = (data) => {
    return request({
        url: '/article/list',
        method: 'POST',
        data
    })
}
// Survey details
export const articleDetails = (data) => {
    return request({
        url: '/article/details',
        method: 'POST',
        data
    })
}

// Select to vote
export const articleCheckoption = (data) => {
    return request({
        url: '/article/checkoption',
        method: 'POST',
        data
    })
}

// Answered
export const articleAnswered = (data) => {
    return request({
        url: '/article/answered',
        method: 'POST',
        data
    })
}

// Unanswered
export const articleUnanswered = (data) => {
    return request({
        url: '/article/unanswered',
        method: 'POST',
        data
    })
}

// Ranking
export const articleRanking = (data) => {
    return request({
        url: '/article/ranking',
        method: 'POST',
        data
    })
}
