import { useNavigate } from 'react-router-dom'
import formatTime from '../../utils/formatTime'
import { connect } from 'react-redux'
import styles from './homeList.module.scss'
const HomeList = (props) => {
    const navigate = useNavigate()
    const time = (t) => {
        const { year, month, date, hour, min, sec } = formatTime(t)
        return [year, month, date].join('-') + ' ' + [hour, min, sec].join(':')
    }
    const toDetails = (articleId) => {
        navigate('/details/' + articleId + '/' + props.user.id)
    }
    return (
        <>
            {
                props.list.length !== 0 ? props.list.map(item => {
                    return (
                        <div onClick={() => toDetails(item.articleId)} className={styles.item} key={item.articleId}>
                            <div className={styles.userContent}>
                                <div><img className={styles.image} src={item.avatar} alt="" /></div>
                                <div className={styles.userRight}>
                                    <div>{item.username} <span className={styles.sex} style={{ marginLeft: '10px' }}>Release time: {time(item.time)}</span></div>
                                    <div className={styles.sex}>
                                        <span>Publish survey: {item.count}</span>
                                        <span style={{ marginLeft: '10px' }}>Number of respondents: {item.articleCount}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginTop: '4px' }}>{item.title}</div>
                                <div className={styles.content}>{item.content}</div>
                            </div>
                        </div>
                    )
                }) : <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No data yet</div>
            }
        </>
    )
}

export default connect((state) => ({ user: state.indexModel }), {})(HomeList)