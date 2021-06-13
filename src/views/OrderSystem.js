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

    //列表删除按钮的确认和取消函数
    function confirm(e) {
        console.log(e);
        message.error('删除成功！');
    }

    function cancel(e) {

    }
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
                                        {/*<Button danger*/}
                                        {/*        type="default"*/}
                                        {/*        onClick={() => {*/}
                                        {/*            console.log("这是车的数据:", item.key)*/}
                                        {/*        }*/}
                                        {/*        }>*/}
                                        {/*    <DeleteOutlined/>*/}
                                        {/*    删除订单*/}
                                        {/*</Button>*/}
                                        <Popconfirm
                                            title="您确定要删除该条数据?"
                                            onConfirm={confirm}
                                            onCancel={cancel}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <Button type="link" href="#">删除</Button>
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