import { NavBar, ProgressBar, Toast } from 'antd-mobile'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { articleDetails, articleCheckoption } from '../api/article'
import formatTime from '../utils/formatTime'
import styles from '../styles/details.module.scss'
const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    const [details, setDetails] = useState({})
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState([])
    const back = () => {
        navigate('/home')
    }
    const time = (t) => {
        const { year, month, date, hour, min, sec } = formatTime(t)
        return [year, month, date].join('-') + ' ' + [hour, min, sec].join(':')
    }
    const optionClick = (option, index) => {
        articleCheckoption({ option, articleId: params.questionId, userId: params.userId }).then(res => {
            if(res.code === 200) {
                Toast.show({ content: res.message })
                counts[index].count = counts[index].count + 1
                setCount(JSON.parse(JSON.stringify(counts)))
                setCount(count + 1)
            }
        })
    }
    useEffect(() => {
        articleDetails({ articleId: params.questionId, userId: params.userId }).then(res => {
            if(res.code === 200) {
                setDetails(res.data[0])
                setCount(res.count)
                setCounts(res.counts)
            }
        })
    }, [])
    return (
        <div className={styles.main}>
            <div style={{ background: '#fff', borderBottom: '1px solid #cccccc70' }}><NavBar onBack={back}>Details</NavBar></div>
            <div className={styles.content}>
                <div className={styles.user}>
                    <div>
                        <img className={styles.image} src={details.avatar} alt="" />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <div style={{ fontSize: '16px' }}>account: {details.username}</div>
                        <div style={{ marginTop: '4px', color: '#c4c1c1' }}>Release time: {time(details.time)}</div>
                        <div style={{ marginTop: '4px', color: '#c4c1c1' }}>Publish survey: {details.count}</div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#fff', borderBottom: '1px solid #cccccc70' }}>
                <div style={{ textAlign: 'center' }}><h1>{details.title}</h1></div>
                <div style={{ padding: '10px', boxSizing: 'border-box', wordBreak: 'break-word' }}>{ details.content }</div>
            </div>
            <div style={{ background: '#fff', overflow: 'hidden', padding:'0 10px', boxSizing: 'boxSizing' }}>
                <div style={{ marginTop: '10px', fontSize: '16px' }}>Please vote</div>
                {
                   details.options && count === 0
                    ?  JSON.parse(details.options).map((item, index) => <div onClick={() => optionClick(item, index)} className={styles.vote} key={index}>{item}</div>) 
                    : <div>
                        {
                            counts.map((item, index) => <div style={{ marginTop: '10px' }} key={index}>
                                <div style={{ marginBottom: '4px', textAlign: 'center' }}>
                                    <span>title: { item.title }</span>
                                    <span style={{ marginLeft: '10px' }}>turnout: { item.count }</span>
                                    <span style={{ marginLeft: '10px' }}>proportion: { counts[0].count + counts[1].count === 0  ? 0 : item.count * 100 / (counts[0].count + counts[1].count) + '%' }</span>
                                </div>
                                <ProgressBar
                                percent={ item.count * 100 / (counts[0].count + counts[1].count) }
                                style={{
                                    '--text-width': '80px',
                                    '--track-width': '30px',
                                    '--fill-color': index === 0 ? '' : 'var(--adm-color-warning)',
                                }}/>
                            </div>)
                        }
                  </div>
                }
                <div style={{ marginTop: '10px' }}></div>
            </div>
        </div>
    )
}

export default Details