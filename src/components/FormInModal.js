import {Form, Input, Modal} from "antd";
import React from "react";

export const PriceReductionReminderForm = ({price, visible, handleOk, onCancel}) => {
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
                    <Input suffix="万" placeholder="降到多少通知我"/>
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input placeholder="请输入您的手机号"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const OrderForm = ({price, visible, handleOk, onCancel}) => {
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
            <p>卖家报价：{Math.round(price * 100) / 100} 万 </p>
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
                    <Input suffix="万" placeholder="期望价格"/>
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input placeholder="请输入您的手机号"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};