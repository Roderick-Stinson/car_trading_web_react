import {List, Button, Space} from 'antd';
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
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <Space>
                                <div>
                                    这车还不买？
                                </div>
                                <div>
                                    <Space>
                                        <Button type="primary" onClick={() => history.replace("/carInfo/"+item.carId)}>
                                            <FileSearchOutlined/>
                                            查看详情
                                        </Button>
                                        <Button danger
                                                type="default"
                                                href={"https://www.baidu.com"}
                                                onClick={() => {
                                                    console.log("这是车的数据:", item.key)
                                                }
                                                }>
                                            <DeleteOutlined/>
                                            删除订单
                                        </Button>
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