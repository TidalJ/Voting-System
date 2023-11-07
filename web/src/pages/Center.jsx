import Nav from "../components/common/Nav"
import { connect } from 'react-redux'
import { useRef, useState, useEffect } from 'react'
import { List, Avatar, Button, ImageUploader } from 'antd-mobile'
import { update } from '../redux/actions/index'
import { useNavigate } from 'react-router-dom'
import { changeAvatar } from '../api/user'
import styles from '../styles/center.module.scss'

const Center = (props) => {
    const navigate = useNavigate()
    const loginOut = () => {
        localStorage.removeItem('vote_token')
        props.update({
            id: '',
            avatar: '',
            username: '',
            sex: ''
        })
        navigate('/login')
    }
    const input = useRef(null)
    const [url, setUrl] = useState('')
    const [fileList, setFileList] = useState([{ src: props.user.avatar }])
    const mockUpload = async (file) => {
        const data = new FormData()
        data.append('file', file)
        data.append('userId', props.user.id)
        changeAvatar(data).then(res => {
            setUrl(URL.createObjectURL(file))
        })
        setFileList([])
        return {
          url: URL.createObjectURL(file),
        }
    }
    const onOpen = () => {
        const nativeInput = input.current?.nativeElement
        if (nativeInput) {
          nativeInput.click()
        }
      }
      useEffect(() => {
        setUrl(props.user.avatar)
        setFileList([{ url: props.user.avatar }])
      },[])
      useEffect(() => {
        setUrl(props.user.avatar)
        setFileList([{ url: props.user.avatar }])
      },[props.user.avatar])
    return (
        <div style={{ width: '100%',height: '100%', position: 'relative'}}>
            <Nav title="Center"></Nav>
            <div className={ styles.info }>
                <List>
                    <List.Item prefix={<Avatar onClick={onOpen} src={url} />} description={<div> gender: {props.user.sex}</div>}>
                        <div>accounnt: {props.user.username}</div>
                    </List.Item>
                </List>
            </div>
            <div style={{ display: 'none' }}>
                <ImageUploader
                    value={fileList}
                    ref={input}
                    onChange={setFileList}
                    upload={mockUpload}
                    multiple={false}
                    maxCount={2}
                    preview={false}
                />
            </div>
            <div className={styles.loginOut}>
                <Button onClick={ loginOut } block color="danger">login out</Button>
            </div>
        </div>
    )
}

export default connect((state) => ({ user: state.indexModel }), { update })(Center)