import { Steps, Button, message } from 'antd';
import {useState} from "react";

const { Step } = Steps;

const steps = [
    {
        title: '在线预约',
        description:'评估师免费上门检测'
    },
    {
        title: '全网代卖',
        description:'海量买家咨询、预约看车'

    },
    {
        title: '买家上门看车',
        description:'平均七日成交'
    },
    {
        title: '代办过户',
        description:'省时省心，一站式服务'
    },
];

export const StepSellCar = () => {

    return (
        <>
            <Steps >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} description={item.description} />
                ))}
            </Steps>
        </>
    );
};
