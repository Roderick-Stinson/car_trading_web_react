import {Card, Space, Button, Modal, InputNumber, Input, Form} from 'antd';
import React, { useState } from 'react';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const CarCard = ({name, price, brand, mileage, regDate}) => {

    const [isModalVisiblePrice, setIsModalVisiblePrice] = useState(false);
    const showModalPrice = () => {
        setIsModalVisiblePrice(true);
    };
    const handleOkPrice = () => {

    };
    const handleCancelPrice = () => {
        setIsModalVisiblePrice(false);
    };

    const [isModalVisibleBuy, setIsModalVisibleBuy] = useState(false);
    const showModalBuy = () => {
        setIsModalVisibleBuy(true);
    };
    const handleOkBuy = () => {
        setIsModalVisibleBuy(false);
    };
    const handleCancelBuy = () => {
        setIsModalVisibleBuy(false);
    };


    return (
        <div className="site-card-border-less-wrapper">
            <Card style={{width: 600}} title={name}>
                <Space direction="vertical" size="middle">
                    <Card type="inner" title={"车主报价：" + Math.round(price * 100) / 100 + "万"}
                        // eslint-disable-next-line
                          extra={<a onClick={showModalPrice}>降价提醒 </a>}>
                        服务费：{Math.round(price * 100) / 10000} 万元 （预估）(最终以成交价格的1%为准）
                    </Card>
                    <Card type="inner">
                        <Card.Grid style={gridStyle} hoverable={false}><h6>品牌</h6><h4>{brand}</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>上牌时间</h6><h4>{regDate? regDate['year'] + '—' + regDate['monthValue']: ''}</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>行驶里程</h6><h4>{Math.round(mileage * 100) / 100}万公里</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>变速箱</h6><h4>自动</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>车牌所在地</h6><h4>重庆</h4></Card.Grid>
                    </Card>
                    <Card type="inner" title="售后保障">
                        30天无忧退车 30天全面保修
                    </Card>
                    <Button type="primary" block onClick={showModalBuy} >立即报价</Button>
                </Space>
            </Card>

            <>
                <Modal title="降价提醒" visible={isModalVisiblePrice} onOk={handleOkPrice} onCancel={handleCancelPrice}>
                    <p>卖家报价：{Math.round(price * 100) / 100} 万 建议入手价格：{Math.round(price * 100) / 100 - 1} - {Math.round(price * 100) / 100} 万</p>
                    <p><Input  suffix="万" placeholder="降到多少通知我" /></p>
                    <p><Input placeholder="请输入您的手机号" /></p>
                </Modal>
            </>

            <>
                <Modal title="请输入您的预期价格" visible={isModalVisibleBuy} onOk={handleOkBuy} onCancel={handleCancelBuy}>
                    <p>卖家报价：{Math.round(price * 100) / 100} 万 </p>
                    <p><Input  suffix="万" placeholder="期望价格" /></p>
                    <p><Input placeholder="请输入您的手机号" /></p>
                </Modal>
            </>


        </div>
    )
}
export default CarCard
