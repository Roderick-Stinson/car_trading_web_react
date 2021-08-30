import 'antd/dist/antd.css';
import {Breadcrumb, Layout, PageHeader} from 'antd'

import {Row, Col} from 'antd';

import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import $http from "../Utils/httpUtil";

import CarSwiper from "../components/Swiper";
import CarCard from "../components/CarInfoCard";
import MyFooter from "../components/Footer";

import {imgSrcPrefix} from "../Utils/GlobalVariableConfig";

const {Content} = Layout

const CarInfo = () => {
    const [carData, setCarData] = useState({})
    const [images, setImages] = useState([])
    const id = useParams().id

    useEffect(() => {
        let imagesSrc = [];
        $http.get('/api/car/' + id)
            .then(res => {
                setCarData(res.data)
                res.data['images'].forEach(img =>
                    imagesSrc.push(imgSrcPrefix + img)
                )
                setImages(imagesSrc)
            })
        // eslint-disable-next-line
    }, [id])
    return (
        <Layout style={{minHeight:"95vh"}}>
            <Layout style={{display:"flex"}}>
                <Content>
                    <Row>
                        <Col span={24} justify="center">
                            <PageHeader
                                className="site-page-header"
                            >
                                <Breadcrumb>
                                    <Breadcrumb.Item>
                                        <Link to={'/'}>我要买车</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        车辆详情
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </PageHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={3}>
                            {images.length > 0
                                ? <CarSwiper imagesSrc={images}/>
                                : <></>}
                        </Col>
                        <Col span={8} offset={1}>
                            <CarCard id={id} name={carData['name']} price={carData['price']} brand={carData['brand']}
                                     mileage={carData['mileage']} regDate={carData['regDate']}/>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <MyFooter/>
        </Layout>
    )
}

export default CarInfo