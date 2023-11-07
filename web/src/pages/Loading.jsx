import { DotLoading } from 'antd-mobile'
const Loading = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
            <span>loading</span>
            <DotLoading color='#333' />
        </div>
    )
}

export default Loading