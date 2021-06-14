import {Form, Input, Modal} from "antd";
import React from "react";
import $http from "../Utils/httpUtil";

export const PriceReductionReminderForm = ({id, price, visible, handleOk, onCancel}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="降价提醒"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then(() => {
                        handleOk()
                    })
            }
            }
        >
            <p>卖家报价：{Math.round(price * 100) / 100} 万
                建议入手价格：{Math.round(price * 100) / 100 - 1} - {Math.round(price * 100) / 100} 万</p>
            <Form
                form={form}
                layout="vertical"
                name="Price"
            >
                <Form.Item
                    name="psychologicalPrice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your psychological price!',
                        },
                    ]}
                >
                    <Input type="number" suffix="万" placeholder="降到多少通知我"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const OrderForm = ({id, price, visible, handleOk, onCancel}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        $http.post('/api/trade/create', null, {
            params: {
                carId: id,
                price: values['psychologicalPrice'],
                status: 0
            }
        }).then(res => {
            console.log(res)
        })
    };


    return (
        <Modal
            visible={visible}
            title="立即报价"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then(() => {
                        form.submit()
                        handleOk()
                    })
            }
            }
        >
            <p>卖家报价：{Math.round(price * 100) / 100} 万 </p>
            <Form
                form={form}
                layout="vertical"
                name="Price"
                onFinish={onFinish}
            >
                <Form.Item
                    name="psychologicalPrice"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的心理预期价格',
                        },
                    ]}
                >
                    <Input type={"number"} suffix="万" placeholder="期望价格"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};