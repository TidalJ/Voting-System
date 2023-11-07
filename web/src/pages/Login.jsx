import { Form, Input, Button, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { update } from '../redux/actions/index'
import { login } from '../api/user'
import Nav from '../components/common/Nav'
import styles from '../styles/login.module.scss'
const Login = (props) => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const onFinish = (data) => {
        login(data).then(res => {
            if(res.code === 200) {
                Toast.show({ content: res.message })
                localStorage.setItem('vote_token', res.token)
                props.update(res.data)
                navigate('/')
            } else {
                Toast.show({ content: res.message })
            }
        })
    }
    return (
        <div className={ styles.main }>
            <Nav title="Login"></Nav>
            <div className={ styles.form }>
                <Form
                    style={{ width: '100vw' }}
                    form={form}
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    mode='card'
                    onFinish={onFinish}
                    footer={ <Button block type='submit' color='primary'>Login</Button> }
                 >
                    <Form.Item name='username' label='account' rules={[{ required: true }]}>
                        <Input placeholder='please enter an account' />
                    </Form.Item>
                    <Form.Item name='password' label='password' rules={[{ required: true }]}>
                        <Input type='password' placeholder='please enter the password' />
                    </Form.Item>
                    <Form.Item>
                        <div className={ styles.register }><span onClick={() => navigate('/register')}>Go to register?</span></div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default connect(()=> ({}), { update })(Login)