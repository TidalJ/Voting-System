import { connect } from 'react-redux'
import { Tabs } from 'antd-mobile'
import Nav from '../components/common/Nav'
import HomeList from '../components/home/HomeList'
import UserList from '../components/home/UserList'
import { articleList, articleAnswered, articleUnanswered, articleRanking } from '../api/article'
import { useState, useEffect } from 'react'
import styles from '../styles/home.module.scss'
const Home = (props) => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    const [tabName, setTabName] = useState('unanswered')
    const changeTab = (value) => {
        setTabName(value)
        switch(value) {
            case 'answered':
                answeredList('init' ,1)
                return
            case 'posted':
                getList('init', 1)
                return
            case 'unanswered':
                unansweredList('init', 1)
                return
            case 'ranking': 
                rankingList('init', 1)
                return
            default:
                getList('init', 1)
                return
        }
    }
    const loadList = async () => {
        switch(tabName) {
            case 'answered':
                setPage(page + 1)
                answeredList('load', page + 1)
                return
            case 'posted':
                setPage(page + 1)
                getList('load', page + 1)
                return
            case 'unanswered':
                setPage(page + 1)
                unansweredList('load', page + 1)
                return
            case 'ranking':
                setPage(page + 1)
                rankingList('load', page + 1)
                return
            default:
                setPage(page + 1)
                getList('load', page + 1)
                return
        }
    }
    const getList = (type, pageNum) => {
        if(type === 'init') {
            setList([])
        }
        articleList({ userId: props.user.id, page: pageNum }).then(res => {
            if(res.code === 200) {
                if(type === 'init') {
                    setList([...res.data])
                    setCount(res.count)
                } else {
                    setList([...list, ...res.data])
                }
            }
        })
    }

    const rankingList = (type, pageNum) => {
        if(type === 'init') {
            setList([])
        }
        articleRanking({ page: pageNum }).then(res => {
            if(type === 'init') {
                setList([...res.data])
                setCount(res.count)
            } else {
                setList([...list, ...res.data])
            }
        })
    }

    const answeredList = (type, pageNum) => {
        if(type === 'init') {
            setList([])
            setPage(1)
        }
        articleAnswered({ userId: props.user.id, page: pageNum }).then(res => {
            if(res.code === 200) {
                if(type === 'init') {
                    setList([...res.data])
                    setCount(res.count)
                } else {
                    setList([...list, ...res.data])
                }
            }
        })
    }

    const unansweredList = (type, pageNum) => {
        if(type === 'init') {
            setList([])
            setPage(1)
        }
        articleUnanswered({ userId: props.user.id, page: pageNum }).then(res => {
            if(res.code === 200) {
                if(type === 'init') {
                    setList([...res.data])
                    setCount(res.count)
                } else {
                    setList([...list, ...res.data])
                }
            }
        })
    }
    useEffect(() => {
        unansweredList('init', 1)
    }, [])
    useEffect(() => {
        unansweredList('init', 1)
    }, [props.user.id])
    return (
        <div>
            <Nav title="Home">
                <img style={{ width: '30px', height: '30px',borderRadius: '50%' }} src={props.user.avatar} alt="" />
            </Nav>
            <div className={styles.tabs}>
                <Tabs defaultActiveKey='unanswered' onChange={changeTab}>
                    <Tabs.Tab title='unanswered' key='unanswered'></Tabs.Tab>
                    <Tabs.Tab title='answered' key='answered'></Tabs.Tab>
                    <Tabs.Tab title='posted' key='posted'></Tabs.Tab>
                    <Tabs.Tab title='ranking' key='ranking'></Tabs.Tab>
                </Tabs>
                <div className={ styles.list }>
                    { tabName !== 'ranking' ? <HomeList list={list}/> : <UserList list={list}/> }
                    { list.length >= count ? null : <div onClick={loadList} style={{ marginTop: '10px', textAlign: 'center', color: '#333' }}>Load more</div> }
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({ user: state.indexModel }), {})(Home)