import { UPDATE } from '../constant/index.js'

const init = {
    id: '',
    avatar: '',
    username: '',
    sex: ''
}

const indexModel = (preState=init, action) => {
    const { data, type }  = action
    switch(type) {
        case UPDATE:
            return { ...preState, ...data }
        default:
            return preState
    }
}

export default indexModel