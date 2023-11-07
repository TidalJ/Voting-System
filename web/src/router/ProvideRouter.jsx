import { useLocation, Navigate } from "react-router"

const ProvideRouter = ({ children }) => {
    const location = useLocation()
    return (
        <div>
            { location.pathname === '/login' || location.pathname === '/register' || localStorage.getItem('vote_token') ? children : <Navigate to='/login'></Navigate> }
        </div>
    )
}

export default ProvideRouter