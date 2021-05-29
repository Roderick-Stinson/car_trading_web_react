import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'

import $http from "../Utils";
import {imgScrPrefix} from "../Utils/GlobalVariableConfig";

import {Pagination} from 'antd';
import {Card} from 'antd';
import {Row, Col} from 'antd';

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
            <>
                <Row gutter={16}>
                    {carList.map((item, index) => <Col span={6} key={index}><MyCard id={item['id']} name={item['name']}
                                                                                    img={imgScrPrefix + item['images']}/></Col>)}
                </Row>
                <Pagination defaultCurrent={1} defaultPageSize={8} onChange={onChange} total={carCount}/>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default HomePage