import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Add = lazy(() => import('../pages/Add'))
const Center = lazy(() => import('../pages/Center'))
const Tab = lazy(() => import('../pages/Tab'))
const Four = lazy(() => import('../pages/Four'))
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const Details = lazy(() => import('../pages/Details'))

const Element = () => {
    const element = [
        {   
            element: <Tab />,
            children: [
                {
                    path: 'home',
                    element: <Home />,
                },
                {
                    path: 'add',
                    element: <Add />,
                },
                {
                    path: 'center',
                    element: <Center />,
                },
                {
                    path: '*',
                    element: <Navigate to='/four'></Navigate>
                }
            ]
        },
        {
            path: '/four',
            element: <Four />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/details/:questionId/:userId',
            element: <Details />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/',
            element: <Navigate to='/home'></Navigate>
        },
        {
            path: '*',
            element: <Navigate to='/four'></Navigate>
        }
    ]
    return useRoutes(element)
}

export default Element

// import { Routes, Route } from 'react-router-dom'

// const Element = () => {
//     return (
//         <Routes>
//             <Route path='/home' element={<Tab />}>
//                 <Route path='home' element={ <Home /> }></Route>
//                 <Route path='add' element={ <Add /> }></Route>
//                 <Route path='center' element={ <Center /> }></Route>
//                 <Route path='*' Navigate='/four'></Route>
//             </Route>
//             <Route path='/login' element={ <Login /> }></Route>
//             <Route path='/register' element={<Register />}></Route>
//             <Route path='/details' element={<Details />}></Route>
//             <Route path='/four' element={ <Four /> }></Route>
//             <Route path='/' Navigate="/home"></Route>
//             <Route path='*' Navigate='/four'></Route>
//         </Routes>
//     )
// }

// export default Element