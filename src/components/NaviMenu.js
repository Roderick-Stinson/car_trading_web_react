import {Link, useHistory} from 'react-router-dom'
import {Button, Col, Form, Input, Menu, Modal, Row} from 'antd';
import {WalletOutlined, TransactionOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {useState} from "react";
import storage from "sweet-storage";
import $http from "../Utils/httpUtil";
import {removeToken, setToken} from "../reducer/TokenReducer";
import {useDispatch} from "react-redux";
import {removeUsername, setUsername} from "../reducer/UsernameReducer";
import Layout from "antd/es/layout/layout";

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
    const [loginButtonText, setLoginButtonText] = useState(storage.get('Username') ? storage.get('Username') : '登陆')
    const [showLoginDialog, setShowLoginDialog] = useState(false)
    const [showRegisterDialog, setShowRegisterDialog] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const [isModalVisibleLogin, setIsModalVisibleLogin] = useState(false);

    const showModalLogin = () => {
        setIsModalVisibleLogin(true);
    };

    const handleOkLogin = () => {
        setIsModalVisibleLogin(false);
        dispatch(removeToken())
        dispatch(removeUsername())
        setLoginButtonText('登陆')
    };

    const handleCancelLogin = () => {
        setIsModalVisibleLogin(false);
    };

    history.listen(route => {
        setCurrent(route.pathname)
    })

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    const onLogin = () => {
        setShowLoginDialog(false)
    }

    const onRegister = () => {
        setShowRegisterDialog(false)
        setShowLoginDialog(true)
    }

    const onCancelLogin = () => {
        setShowLoginDialog(false)
    }

    const onCancelRegister = () => {
        setShowRegisterDialog(false)
        setShowLoginDialog(true)
    }

    const onClick = () => {
        if (loginButtonText === '登陆')
            setShowLoginDialog(true)
        else {
            showModalLogin(true)
        }
    }

    storage.on('Authorization', () => {
        setLoginButtonText("登陆")
    });

    const [formLogin] = Form.useForm();
    const [formRegister] = Form.useForm()
    const onFinishLogin = (values) => {
        $http.post('/api/login', null, {
            params: {
                username: values['username'],
                password: values['password']
            }
        }).then(res => {
            if (res.data['code'] === 200) {
                dispatch(setToken(res.data['token']))
                dispatch(setUsername(res.data['username']))
                setLoginButtonText(res.data['username'])
            } else
                console.log('error')
        })
    };

    const onFinishRegister = (values) => {
        console.log(values)
        $http.post('/api/register', {
            "username": values['username'],
            "password": values['password'],
            "phone": values['phoneNumber']
        }).then(res => {
            if (res.data.code === 200)
                alert("注册成功")
        })
    }
    return (
        <Layout>
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
                        <Menu.Item key="order" icon={<UnorderedListOutlined/>}>
                            <Link to={'/order'}/>
                            我的订单
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={1}>
                    <Button type={"text"} onClick={() => onClick()}>{loginButtonText}</Button>
                </Col>
                <Modal
                    visible={showLoginDialog}
                    title="登录"
                    onCancel={onCancelLogin}
                    onOk={
                        () => {
                            formLogin.validateFields()
                                .then(() => {
                                    formLogin.submit()
                                    onLogin()

                                })
                        }
                    }
                >
                    <Form
                        {...layout}
                        form={formLogin}
                        name="ManageSystemLoginForm"
                        onFinish={onFinishLogin}
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
                    <Button onClick={() => {
                        setShowLoginDialog(false)
                        setShowRegisterDialog(true)
                    }}
                    >注册</Button>
                </Modal>
                <Modal
                    visible={showRegisterDialog}
                    title="注册"
                    onCancel={onCancelRegister}
                    onOk={
                        () => {
                            formRegister.validateFields()
                                .then(() => {
                                    formRegister.submit()
                                    onRegister()
                                })
                        }
                    }
                >
                    <Form
                        {...layout}
                        form={formRegister}
                        name="RegisterForm"
                        onFinish={onFinishRegister}
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
                        <Form.Item
                            label="PhoneNumber"
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phoneNumber!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Form>
                </Modal>
            </Row>
        </Layout>
    )
}

export default NaviMenu