import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Empleado</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/">Login</Link></Menu.Item>
        <Menu.Item key="3">nav 2</Menu.Item>
        <Menu.Item key="4">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
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
    );
}
 export default CustomLayout;
  