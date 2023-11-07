import { NavBar, Form, Input, Button, Radio, Space, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/user'
import styles from '../styles/login.module.scss'
const Register = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    const onFinish = (data) => {
        register(data).then(res => {
            if(res.code === 200) {
                Toast.show({ content: res.message })
                navigate('/login')
            } else {
                Toast.show({ content: res.message })
            }
        })
    }
    return (
        <div className={ styles.main }>
            <div style={{ background: '#fff', borderBottom: '1px solid #cccccc70' }}><NavBar onBack={back}>Register</NavBar></div>
            <div className={ styles.form }>
                <Form
                    style={{ width: '100vw' }}
                    form={form}
                    initialValues={{
                        username: '',
                        password: '',
                        sex: 'male'
                    }}
                    mode='card'
                    onFinish={onFinish}
                    footer={ <Button block type='submit' color='primary'>Register</Button> }
                 >
                    <Form.Item name='username' label='account' rules={[{ required: true }]}>
                        <Input placeholder='please enter an account' />
                    </Form.Item>
                    <Form.Item name='password' label='password' rules={[{ required: true }]}>
                        <Input type='password' placeholder='please enter an password' />
                    </Form.Item>
                    <Form.Item name='sex' label='gender' rules={[{ required: true }]}>
                        <Radio.Group>
                            <Space>
                                <Radio value='male'>male</Radio>
                                <Radio value='female'>female</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register