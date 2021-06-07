// import {Redirect, useHistory} from "react-router-dom";
// import storage from "sweet-storage";
import {List, Avatar, Button, Space} from 'antd';
import Layout, {Content} from "antd/es/layout/layout";
import {DeleteOutlined, FileSearchOutlined} from '@ant-design/icons';

const OrderList = () => {

    const data = [
        {
            key: "高达 初号机 2019年款"
        },
        {
            key: "高达 初号机 2019年款"
        },
        {
            key: "高达 初号机 2019年款"
        },
        {
            key: "高达 初号机 2019年款"
        },

    ];
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
                                    src="http://8.140.11.73:4567/image/%E5%A4%A7%E4%BC%97-%E9%AB%98%E5%B0%94%E5%A4%AB_2011%E6%AC%BE_2.0TSI_GTI_2011%E5%B9%B403%E6%9C%88_0.jpg"
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
                                        <Button type="primary">
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