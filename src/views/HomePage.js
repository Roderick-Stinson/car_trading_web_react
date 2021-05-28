import {useHistory} from 'react-router-dom'
import $http from "../Utils";

import {Card} from 'antd';
import {Row, Col} from 'antd';
import {useEffect, useState} from "react";

import {prefix} from "../config";

const {Meta} = Card;

const MyCard = ({id, name, img}) => {

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
        </Card>
    )
}


const HomePage = () => {

    const [carList, setCarList] = useState([])

    useEffect(() => {
        $http.get('/api/car/list')
            .then(res => {
                setCarList(res)
            })
    }, [])

    return (
        <Row gutter={16}>
            {carList.map((item, index) => <Col span={6} key={index}><MyCard id={item['id']} name={item['name']} img={prefix + item['images']}/></Col>)}
        </Row>
    )
}

export default HomePage