import 'antd/dist/antd.css';
import '../css/layout.css'
import {Layout} from 'antd'

import {useEffect, useState} from "react";
import $http from "../Utils";

import CarSwiper from "../components/Swiper";

const {Header, Footer, Sider, Content} = Layout

const CarInfo = () => {
    // eslint-disable-next-line
    const [carData, setCarData] = useState({})
    // eslint-disable-next-line
    const [images, setImages] = useState([])
    const [carRegDate, setCarRegDate] = useState({})

    let imagesSrc = [];

    useEffect(() => {
        $http.get('/api/car/1')
            .then(res => {
                setCarData(res)
                setCarRegDate(res['regDate'])
                res['images'].forEach(img =>
                    imagesSrc.push('http://localhost:4567/' + img)
                );
                setImages(imagesSrc)
            })
        // eslint-disable-next-line
    }, [])
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider width={document.documentElement.clientWidth / 2}><CarSwiper imagesSrc={imagesSrc}/> </Sider>
                <Content>
                    {carRegDate.year}
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default CarInfo