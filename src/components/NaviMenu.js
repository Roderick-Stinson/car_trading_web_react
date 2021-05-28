import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {useState} from "react";

const { SubMenu } = Menu;

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
                Navigation One
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
        </Menu>
    )

}

export default NaviMenu