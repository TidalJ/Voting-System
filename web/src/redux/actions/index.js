import { UPDATE } from '../constant/index'
// import { login } from '../../api/user'

export const update = (data) => ({ type: UPDATE, data })

// export const userLogin = (data) => {
//     return (dispatch) => {
//         login(data).then(res => {
//             console.log('res', res)
//             if(res.code === 200) {
//                 navigate('/')
//                 dispatch(update(data))
//             } else {
//                 Toast.show({ content: res.message })
//             }
//         })
//     }
// }