import {List, Button, Space, message, Popconfirm} from 'antd';
import Layout, {Content} from "antd/es/layout/layout";
import {DeleteOutlined, FileSearchOutlined} from '@ant-design/icons';
import $http from "../Utils";
import {useEffect, useState} from "react";
import {imgScrPrefix} from "../Utils/GlobalVariableConfig";
import storage from "sweet-storage";
import {useHistory} from "react-router-dom";

const OrderList = () => {
    const [data, setData] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (!storage.get('Authorization')) {
            history.replace('/')
            alert('请登录')
        } else {
            let test = []
            $http.get("/api/user/buy")
                .then(res => {
                    res.data.forEach(item => {
                        test.push({
                            key: item['car']['name'],
                            id: item['id'],
                            carId: item['carId'],
                            imgSrc: imgScrPrefix + item['car']['images'][0]
                        })
                    })
                    setData(test)
                })
        }
    }, [history]);

    return (
        <Layout>
            <Content style={{padding: '50px 50px'}}>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src={item.imgSrc}
                                />
                            }>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.key}</a>}
                            />
                            <Space>
                                <div>
                                    这车还不买？
                                </div>
                                <div>
                                    <Space>
                                        <Button type="primary"
                                                onClick={() => history.replace("/carInfo/" + item.carId)}>
                                            <FileSearchOutlined/>
                                            查看详情
                                        </Button>
                                        <Popconfirm
                                            title="您确定要删除该条数据?"
                                            onConfirm={() => {
                                                $http.delete('/api/trade/'+item.id)
                                                    .then(res => {
                                                        console.log("delete", res)
                                                        if (res.status !== 200) {
                                                            message.error("删除错误，请重试").then(r =>{} )
                                                        }
                                                    })
                                                message.error('删除成功！').then(r => {});
                                                let updatedData = []
                                                data.forEach(itemdata => {
                                                    if (itemdata.id !== item.id) {
                                                        updatedData.push(itemdata)
                                                    }
                                                })
                                                setData(updatedData)
                                            }}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <Button danger type="default">
                                                <DeleteOutlined/>
                                                删除订单
                                            </Button>
                                        </Popconfirm>
                                    </Space>
                                </div>
                            </Space>
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    )
}

export default OrderList