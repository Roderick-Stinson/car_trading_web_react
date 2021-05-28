import {useHistory} from 'react-router-dom'
import $http from "../Utils";

import {Card} from 'antd';
import {Row, Col} from 'antd';
import {useEffect, useState} from "react";

const {Meta} = Card;

const MyCard = ({id, name, img}) => {

    const history = useHistory()
    console.log(img)

    return (
        <Card
            hoverable={true}
            style={{width: 360}}
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
        <Row>
            {carList.map((item, index) => <Col span={6} key={index}><MyCard id={item['id']} name={item['name']}
                                                                img={'http://localhost:4567/' + item['images']}/></Col>)}
        </Row>
    )
}

export default HomePage