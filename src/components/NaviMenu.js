import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Menu, Modal, Row} from 'antd';
import {WalletOutlined, TransactionOutlined, AppstoreOutlined} from '@ant-design/icons';
import {useState} from "react";
import storage from "sweet-storage";
import $http from "../Utils";
import {removeToken, setToken} from "../reducer/TokenReducer";
import {useDispatch} from "react-redux";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const NaviMenu = () => {
    const [current, setCurrent] = useState('')
    const [loginButtonText, setLoginButtonText] = useState('login')
    const [showLoginDialog, setShowLoginDialog] = useState(false)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    const onLogin = () => {
        setShowLoginDialog(false)
    }

    const onCancel = () => {
        setShowLoginDialog(false)
    }

    const onClick = () => {
        if (loginButtonText === 'login')
            setShowLoginDialog(true)
        else {
            dispatch(removeToken())
            setLoginButtonText('login')
        }
    }

    storage.on('Authorization', () => {
        setLoginButtonText("login")
    })

    const [form] = Form.useForm();
    const onFinish = (values) => {

        $http.post('/api/login', null, {
            params: {
                username: values['username'],
                password: values['password']
            }
        }).then(res => {
            if (res.data['code'] === 200) {
                dispatch(setToken(res.data['token']))
            } else
                console.log('error')
        })
    };


    return (
        <Row style={{background: "white"}} justify="space-around" align="middle">
            <Col span={23}>
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode={"horizontal"}>
                    <Menu.Item key="" icon={<WalletOutlined/>}>
                        <Link to={'/'}/>
                        我要买车
                    </Menu.Item>
                    <Menu.Item key="sell" icon={<TransactionOutlined/>}>
                        <Link to={'/sell'}/>
                        我要卖车
                    </Menu.Item>
                    <Menu.Item key="management" icon={<AppstoreOutlined/>}>
                        <Link to={'/management'}/>
                        后台管理系统
                    </Menu.Item>
                </Menu>
            </Col>
            <Col span={1}>
                <Button type={"text"} onClick={() => onClick()}>{loginButtonText}</Button>
            </Col>
            <Modal
                visible={showLoginDialog}
                title="登录"
                onCancel={onCancel}
                onOk={
                    () => {
                        form.validateFields()
                            .then(() => {
                                form.submit()
                                onLogin()
                                setLoginButtonText("success")
                            })
                    }
                }
            >
                <Form
                    {...layout}
                    form={form}
                    name="ManageSystemLoginForm"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </Form>
            </Modal>
        </Row>
    )
}

export default NaviMenu