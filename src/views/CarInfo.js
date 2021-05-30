import 'antd/dist/antd.css';
import '../css/layout.css'
import {Button, Layout , PageHeader} from 'antd'

import { Row, Col } from 'antd';

import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import $http from "../Utils";

import CarSwiper from "../components/Swiper";
import CarCard from "../components/CarInfoCard";

import {imgScrPrefix} from "../Utils/GlobalVariableConfig";

const {Header, Footer, Sider, Content} = Layout

const routes = [
    {
        path: '',
        breadcrumbName: '我要买车',
    },
    {
        breadcrumbName: '车辆详情',
    },
];

const CarInfo = () => {
    // eslint-disable-next-line
    const [carData, setCarData] = useState({})
    // eslint-disable-next-line
    const [images, setImages] = useState([])
    const [carRegDate, setCarRegDate] = useState({})

    const id = useParams().id
    let imagesSrc = [];

    useEffect(() => {
        $http.get('/api/car/' + id)
            .then(res => {
                setCarData(res.data)
                setCarRegDate(res.data['regDate'])
                res.data['images'].forEach(img =>
                    imagesSrc.push(imgScrPrefix + img)
                );
                console.log(res.data)
                setImages(imagesSrc)
            })
        // eslint-disable-next-line
    }, [id])
    return (
        <Layout>
            <Layout>
                <Content  >
                    <Row>
                        <Col span={24}  justify="center" >
                            <PageHeader
                                className="site-page-header"
                                breadcrumb={{ routes }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} offset={1}><CarSwiper imagesSrc={imagesSrc}/></Col>
                        <Col span={8} offset={1}>
                            {/*{carData['name']}*/}
                            {/*车主报价： {carData['price']}*/}
                            {/*上牌时间：{carRegDate['year']}-{carRegDate['monthValue']}-{carRegDate['dayOfMonth']}*/}
                            <CarCard > </CarCard>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default CarInfo