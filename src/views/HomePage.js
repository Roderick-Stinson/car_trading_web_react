import {useHistory} from 'react-router-dom'

import {Card} from 'antd';

const {Meta} = Card;

const HomePage = () => {

    const history = useHistory()
    const id = 1
    let arr = [1, 2, 3, 4, 5];

    return (
        arr.map(item => (
            <Card
                hoverable={true}
                style={{width: 240}}
                cover={<img alt={'example'} src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}/>}
                onClick={() => {history.push('/carInfo/'+id)}}
            >
                <Meta title="Europe Street beat" description={item}/>
            </Card>
        ))
    )
}

export default HomePage