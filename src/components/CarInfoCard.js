import {Card, Space} from 'antd';

import {Button} from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const CarCard = ({name, price, brand, mileage, regDate}) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card style={{width: 600, height: 600}} title={name}>
                <Space direction="vertical" size="large">
                    <Card type="inner" title={"车主报价：" + Math.round(price * 100) / 100 + "万"}
                        // eslint-disable-next-line
                          extra={<a>降价提醒</a>}>
                        服务费：{Math.round(price * 100) / 10000} 万元
                    </Card>
                    <Card type="inner">
                        <Card.Grid style={gridStyle} hoverable={false}>{brand}</Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}>{regDate? regDate['year'] + '—' + regDate['monthValue']: ''}</Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}>{Math.round(mileage * 100) / 100}万公里</Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}>变速箱</Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}>车牌所在地</Card.Grid>
                    </Card>
                    <Card type="inner" title="售后保障">
                        30天无忧退车 30天全面保修
                    </Card>
                    <Button type="primary" block>立即报价</Button>
                </Space>
            </Card>
        </div>
    )
}
export default CarCard
