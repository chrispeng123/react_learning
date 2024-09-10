import React, {useState} from "react";

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const {
    token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const CommonAside = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible >
            <h3 className={"app-name"}>通用后台管理系统</h3>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{height: '100%'}} />
        </Sider>
    )
}

export default CommonAside