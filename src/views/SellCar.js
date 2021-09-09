import {TransactionOutlined, WalletOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {Button, Card, message, Space} from "antd";
import {StepSellCar} from "../components/StepSellCar";
import Modal from "antd/es/modal/Modal";
import storage from "sweet-storage";
import {useHistory} from "react-router-dom";
import $http from "../Utils/httpUtil";

const SellCar = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        $http.post('/api/car/create', {})
            .then(res => {
                if (res.status !== 200) {
                    message.error("网络错误，请重试")
                } else {
                    message.success('预约成功！');
                }
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        if (!storage.get('Authorization')) {
            history.replace('/')
            alert('请登录')
        }
    })

    return (
        <div>
            <Card style={{marginTop: '50px',width: 900,textAlign:'center',marginLeft: '500px' }} title={"卖车流程"}><StepSellCar/></Card>
            <Card style={{width: 900 , marginTop: '20px',marginLeft: '500px',textAlign:'center' }} title={"极速卖车"}>
                <Space direction="vertical" size="middle">
                    <Button type="primary" style={{width:300}}  onClick={showModal}>我要卖车</Button>
                </Space>
            </Card>
            <Card style={{marginTop: '20px',width: 900,textAlign:'center',marginLeft: '500px' }} title={"保卖服务"} >
                <Space direction="horizontal" size="middle">
                    <Card title={"当天拿钱"}>
                        <WalletOutlined/> 当天拿钱 收车当天拿车款 首付30%起
                    </Card>
                    <Card title={"保卖好价"}>
                        <TransactionOutlined/>好车不和坏车卖，好车卖好价起
                    </Card>
                    <Card title={"全程托管"}>
                        <TransactionOutlined/>专业检测评估 全程托管免打扰
                    </Card>
                </Space>
            </Card>

            <Modal title="您确定要预约卖车吗？"
                   style={{textAlign:'center'}}
                   width={400}
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <p>预约成功后我们平台会有专属客服联系您</p>
                <p>评估师会免费上门检测为您服务</p>
            </Modal>
        </div>
    )
}

export default SellCar