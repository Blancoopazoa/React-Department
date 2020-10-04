import React from 'react';
import { Layout, Menu } from 'antd';
      import {
        AppstoreOutlined,
        BarChartOutlined,
        CloudOutlined,
        ShopOutlined,
        TeamOutlined,
        UserOutlined,
        UploadOutlined,
        VideoCameraOutlined,
      } from '@ant-design/icons';
  
      const { Header, Content, Footer, Sider } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <br/>
            <br/>
            <br/>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Empleados
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Departamentos
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Reservas
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                Servicios
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
            </Content>
          </Layout>
        </Layout>
      );
}
 export default CustomLayout;