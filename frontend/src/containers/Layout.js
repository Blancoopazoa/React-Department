import React from 'react';
import '../App';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
      import {
        BarChartOutlined,
        UserOutlined,
        UploadOutlined,
        VideoCameraOutlined,
      } from '@ant-design/icons';
  
      const { Header, Content, Sider } = Layout;

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
<<<<<<< HEAD
            <Menu theme="dark" mode="inline">
=======
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key="0" icon={<UserOutlined />}>
                <Link to="/home">Home</Link>
              </Menu.Item>
>>>>>>> ad6221bc72c125658dfc77704838e09875dd78cd
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/empleado">Empleados</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/departamento">Departamentos</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/cliente">Cliente</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
              <Link to="/inventario">Inventario</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<BarChartOutlined />}>
              <Link to="/reserva">Reservas</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<BarChartOutlined />}>
              <Link to="/servicios">Servicios</Link>
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