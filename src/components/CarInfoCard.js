import {Card, Space , Button} from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const CarCard = ({name, price, brand, mileage, regDate}) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card style={{width: 600}} title={name}>
                <Space direction="vertical" size="middle">
                    <Card type="inner" title={"车主报价：" + Math.round(price * 100) / 100 + "万"}
                        // eslint-disable-next-line
                          extra={<a>降价提醒</a>}>
                        服务费：{Math.round(price * 100) / 10000} 万元 （预估）(最终以成交价格的1%为准）
                    </Card>
                    <Card type="inner">
                        <Card.Grid style={gridStyle} hoverable={false}><h6>品牌</h6><h4>{brand}</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>上牌时间</h6><h4>{regDate? regDate['year'] + '—' + regDate['monthValue']: ''}</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>行驶里程</h6><h4>{Math.round(mileage * 100) / 100}万公里</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>变速箱</h6><h4>自动</h4></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h6>车牌所在地</h6><h4>重庆</h4></Card.Grid>
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
