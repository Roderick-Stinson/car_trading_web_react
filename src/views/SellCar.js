import {TransactionOutlined, WalletOutlined} from "@ant-design/icons";
import React from "react";
import {Button, Card, Input, Space} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import {StepSellCar} from "../components/StepSellCar";

const SellCar = () => {

    return (
        <div>
            <Card style={{width: 900 , marginTop: '40px',marginLeft: '500px',textAlign:'center' }} title={"极速卖车"}>
                <Space direction="vertical" size="middle">
                    <Input placeholder="请输入联系方式" />
                    <Button type="primary" style={{width:300}}>提交申请</Button>
                    <Checkbox >阅读并同意《用户服务协议》、《隐私政策》提交并注册为用户。提交即视为同意本平台电联您提供服务</Checkbox>
                </Space>
            </Card>
            <Card style={{marginTop: '20px',width: 900,textAlign:'center',marginLeft: '500px' }} title={"卖车流程"}><StepSellCar></StepSellCar></Card>
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
        </div>
    )
}

export default SellCar