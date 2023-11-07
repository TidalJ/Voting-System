import Nav from "../components/common/Nav"
import { Form, Button, Input, TextArea, Toast } from 'antd-mobile'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import formatTime from "../utils/formatTime"
import { articleAdd } from '../api/article'
import styles from '../styles/add.module.scss'
const Add = (props) => {
    const [form] = Form.useForm()
    const [optionInput, setOptionInput] = useState('')
    const [options, setOptions] = useState([])
    const navigate = useNavigate()
    const onFinish = (values) => {
        if(options.length === 2) {
            const params = {
                title: values.title,
                content: values.content,
                userId: props.user.id,
                options: '',
                time: ''
            }
            const { year, month, date, hour, min, sec } = formatTime(new Date())
            const tempOptions = []
            options.forEach(item => {
                tempOptions.push(item.title)
            })
            params.time = [year, month, date].join('-') + ' ' + [hour, min, sec].join(':')
            params.options = JSON.stringify(tempOptions)
            articleAdd(params).then(res => {
                if(res.code === 200) {
                    Toast.show({ content: res.message })
                    navigate('/details/' + res.data.insertId + '/' + props.user.id)
                }
            })
        } else {
            Toast.show({ content: 'At least two voting items are required' })
        }
    }
    const changeInput = (value) => {
        setOptionInput(value)
    }
    const addClick = () => {
        if(optionInput !== '') {
            if(options.length === 0) {
                options.push({ id: 1, title: optionInput})
            } else if(options.length < 2 && options[0].title !== optionInput) {
                options.push({ id: options[options.length - 1].id + 1, title: optionInput})
            }
            setOptionInput('')
        }
    }
    const delClick = (id) => {
        const temp = options.filter(item => item.id !== id)
        setOptions(temp)
    }
    return (
        <div>
            <Nav title="Add"></Nav>
            <Form
                style={{ width: '100vw' }}
                form={form}
                initialValues={{
                    title: '',
                    content: ''
                }}
                mode='card'
                onFinish={onFinish}
                footer={ <Button block type='submit' color='primary'>Submit</Button> }
                >
                <Form.Item name='title' label='title' rules={[{ required: true }]}>
                    <Input type='title' placeholder='please enter the title' />
                </Form.Item>
                <Form.Item name='content' label='content' rules={[{ required: true }]}>
                    <TextArea placeholder='please enter an content' />
                </Form.Item>
                <div style={{ position: 'relative' }}>
                    <Form.Item label='options' rules={[{ required: true }]}>
                        <div className={ styles.addBtn }>
                            <Input onChange={ changeInput} maxLength={20} value={optionInput} />
                            <Button onClick={addClick} size='mini'>+</Button>
                        </div>
                        {
                            options.map(item =>
                                <div key={item.id} className={ styles.option}>
                                    <span>{ item.title }</span>
                                    <span onClick={() => delClick(item.id)} className={styles.del}>删除</span>
                                </div>
                            )
                        }
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default connect((state) => ({ user: state.indexModel }), {})(Add)