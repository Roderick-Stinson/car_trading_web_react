import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'

import $http from "../Utils";
import {imgScrPrefix} from "../Utils/GlobalVariableConfig";

import {Pagination, Layout, Space, Button, Tag} from 'antd';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {Content} from "antd/es/layout/layout";

const {Meta} = Card;

const MyCard = ({id, name, img, price, mileage, regDate}) => {

    const history = useHistory()

    return (
        <Card
            hoverable={true}
            cover={<img alt={'加载中'} src={img}/>}
            onClick={() => {
                history.push('/carInfo/' + id)
            }}
        >
            <Meta title={name}/>
            <div style={{
                marginTop: "10px",
                color: "gray",
                fontSize: "10px"
            }}> {regDate ? regDate['year'] : ''}年{regDate ? regDate['monthValue'] : ''}月/{Math.round(mileage * 100) / 100}公里
            </div>
            <div style={{marginTop: "5px"}}><Tag color="#4ab340">超值</Tag></div>
            <div style={{marginTop: "10px", color: "red", fontSize: "25px"}}>
                {price}万
            </div>
            <Row justify={'center'}>
                <Col>
                    <Button danger  size="middle">查看详情</Button>
                </Col>
            </Row>


        </Card>
    )
}

const HomePage = () => {

    const [carList, setCarList] = useState([])
    const [carCount, setCarCount] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        $http.get('/api/car/list', {params: {offset: offset}})
            .then(res => {
                setCarList(res.data)
            })
    }, [offset])
    useEffect(() => {
        $http.get('/api/car/count')
            .then(res => {
                setCarCount(res.data)
            })
    }, [])

    const onChange = (page) => {
        setOffset(8 * (page - 1))
    }

    if (carCount > 0) {
        return (
            <Layout>
                <Content style={{padding: '0 240px'}}>
                    <Col offset={0} style={{marginTop: "60px"}}>
                        <Space direction="vertical" size="large">
                            <Row gutter={[16, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                                {carList.map((item, index) => <Col span={6} key={index}><MyCard id={item['id']}
                                                                                                name={item['name']}
                                                                                                regDate={item['regDate']}
                                                                                                mileage={item['mileage']}
                                                                                                price={Math.round(item['price'] * 100) / 100}
                                                                                                img={imgScrPrefix + item['images']}/></Col>)}
                            </Row>
                            <Row justify="center">
                                <Pagination defaultCurrent={1} defaultPageSize={8} onChange={onChange}
                                            total={carCount}/>
                            </Row>
                        </Space>
                    </Col>
                </Content>
            </Layout>
        )
    } else {
        return (
            <></>
        )
    }
}

export default HomePage