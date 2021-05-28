import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
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
            <Menu.Item key="mail" icon={<MailOutlined />}>
                我要买车
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
                我要卖车
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
                后台管理系统
            </Menu.Item>
        </Menu>
    )

}

export default NaviMenu