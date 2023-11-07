import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
const Four = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
        // console.log(location)
    }

    return (
        <div style={{ width: '100vw', height: '100vh'}}>
            <div style={{ background: '#fff', borderBottom: '1px solid #cccccc70' }}><NavBar onBack={back}>404</NavBar></div>
            <div style={{ width: '100vw', height: 'calc(100vh - 46px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px' }}>404</div>
        </div>
    )
}

export default Four