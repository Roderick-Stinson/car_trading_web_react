import { Card , Space } from 'antd';

import { Button, Radio } from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
//,brand,date,mileage
const CarCard = ({name}) => {


    return(
        <div className="site-card-border-less-wrapper">
            <Card  style={{ width: 600 , height:600}} title="Car title" >
                <Space direction="vertical" size="large">
                <Card type="inner" title={"车主报价："+ { name }+"万"} extra={<a href="#">降价提醒</a>}>
                    服务费：（车价的1%）
                </Card>
                <Card type="inner" >
                    <Card.Grid style={gridStyle} hoverable={false}>品牌</Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>上牌时间</Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>行驶里程</Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>变速箱</Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>车牌所在地</Card.Grid>
                </Card>
                <Card type="inner" title="售后保障" >
                    30天无忧退车   30天全面保修
                </Card>
                <Button type="primary"  block >立即报价</Button>
                </Space>
            </Card>



        </div>
    )
}
export default CarCard
