import {Form, Input, Button, Checkbox, Modal} from 'antd';
import $http from "../Utils/httpUtil";
import {useDispatch} from "react-redux";
import {setToken} from '../reducer/TokenReducer'
import {useHistory} from "react-router-dom";
import {getShowModal, setFalse} from "../Utils/GlobalVariableConfig";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


const ManageSystemLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    if (getShowModal()) {
        Modal.info({
            title: '登录已过期，请重新登录',
        })
        setFalse()
    }

    const onFinish = (values) => {

        $http.post('/api/login', null, {
            params: {
                username: values['username'],
                password: values['password']
            }
        }).then(res => {
            if (res.data['code'] === 200) {
                dispatch(setToken(res.data['token']))
                history.replace('/management')
            } else
                console.log('error')
        })
    };

    return (
        <>
            <Form
                {...layout}
                name="ManageSystemLoginForm"
                initialValues={{
                    remember: true,
                }}
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

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ManageSystemLogin