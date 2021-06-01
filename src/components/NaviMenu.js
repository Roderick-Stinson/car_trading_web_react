import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import { WalletOutlined, TransactionOutlined , AppstoreOutlined } from '@ant-design/icons';
import {useState} from "react";

const NaviMenu = () => {
    const [current, setCurrent] = useState('mail')

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode={"horizontal"}>
            <Menu.Item key="" icon={<WalletOutlined />}>
                <Link to={'/'} />
                我要买车
            </Menu.Item>
            <Menu.Item key="sell" icon={<TransactionOutlined />}>
                <Link to={'/sell'} />
                我要卖车
            </Menu.Item>
            <Menu.Item key="management" icon={<AppstoreOutlined />}>
                <Link to={'/management'} />
                后台管理系统
            </Menu.Item>
        </Menu>
    )
}

export default NaviMenu