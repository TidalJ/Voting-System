import styles from './userList.module.scss'
const UserList = (props) => {
    return (
        <div>
            {
                props.list.length !== 0 ?
                props.list.map((item, index) => {
                    return (
                        <div className={ styles.item } key={ item.id }>
                            <div>
                                <div>ranking: </div>
                                <div style={{ textAlign: 'center', marginTop: '4px' }}>{ index + 1 }</div>
                            </div>
                            <div className={ styles.left }>
                                <img className={ styles.image } src={ item.avatar } alt="" />
                            </div>
                            <div className={ styles.right }>
                                <div>Account: { item.username }</div>
                                <div style={{ marginTop: '4px', color: '#C4C1C1' }}>Total number of participants in the survey: { item.count }</div>
                                <div style={{ marginTop: '4px', color: '#C4C1C1' }}>Number of published surveys: { item.voteCount }</div>
                                <div style={{ marginTop: '4px', color: '#C4C1C1' }}>Number of survey responses: { item.answerCount }</div>
                            </div>
                        </div>
                    )
                })
                : <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>暂无数据</div>
            }
        </div>
    )
}

export default UserList