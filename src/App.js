import React, { useState } from 'react';
import { Layout, Menu, Modal, Input, Button } from 'antd';
import 'antd/dist/reset.css';
//import { Steps } from 'antd';
//layout
//import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb,  theme } from 'antd';

import App2 from './App2';
const { Header, Content, Footer, Sider } = Layout;
//const { Header, Content, Footer } = Layout;
///////////////*

/*
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
*/
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `MỤC ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

//////
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

//
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [redirectToApp2, setRedirectToApp2] = useState(false);
/*

  const handleLogin = () => {
    // Xử lý đăng nhập tại đây
    console.log('Đăng nhập với tên người dùng:', username, 'và mật khẩu:', password);
    // Sau khi xử lý đăng nhập, bạn có thể chuyển đến trang chính hoặc thực hiện các hành động khác
    // Ví dụ: history.push('/dashboard');
  };
  */
  //admin
  const handleLogin = () => {
    if (username === 'Thoai' && password === 'hihi') {
      setLoggedIn(true);
      setRedirectToApp2(true);
    } else {
      alert('SAI RÒIIIIIIIIIIIIII , tên user là Thoai , pass là hihi');
    }
  };
  const handleBack = () => {
    setRedirectToApp2(false);
  };

  if (loggedIn) {
    if (redirectToApp2) {
      return <App2 onBack={handleBack} />;
    } else {
      return <App />;
    }
  }

  const handleRe = () => {
    // Xử lý đăng nhập tại đây
    console.log('Đăng nhập với tên người dùng:', username, 'và mật khẩu:', password,'Đăng nhập với tên người dùng:', email, 'và mật khẩu:', phoneNumber, 'và mật khẩu:', address);
    // Sau khi xử lý đăng nhập, bạn có thể chuyển đến trang chính hoặc thực hiện các hành động khác
    // Ví dụ: history.push('/dashboard');
  };

  const handleMenuClick = (key) => {
    setCurrentPage(key);
    // Các xử lý khác khi menu được click
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} onClick={({ key }) => handleMenuClick(key)}>
          <Menu.Item key="home">Trang chủ</Menu.Item>
          <Menu.Item key="about">Giới thiệu</Menu.Item>
          <Menu.Item key="products">Sản phẩm</Menu.Item>
        </Menu>
        <div style={{ float: 'right' }}>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="login" onClick={() => setLoginVisible(true)}>Đăng nhập</Menu.Item>
            <Menu.Item key="register"onClick={() => setRegisterVisible(true)}>Đăng ký</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Breadcrumb style={{ margin: '16px 0',padding: '15px' ,text: '500px' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>2</Breadcrumb.Item>
        </Breadcrumb>
      <Content style={{ padding: '0px' }}>
        
        {currentPage === 'home' && (
          <div>
            <h1>Chào mừng đến với trang bán hàng của Thoại</h1>
            <p>Xin chào! Đây là trang giao diện của Thoại.</p>
            <p>Hãy khám phá các sản phẩm tuyệt vời mà Thoại cung cấp.</p>
            <div className="product-list">
              {/* Hiển thị danh sách sản phẩm */}
            </div>
          </div>
        )}
        {currentPage === 'about' && (
          <div>
            <h1>Giới thiệu</h1>
            <p>Xin chào! dưới Đây là trang layout phục vụ admin , gắn đỡ nèe.</p>
            <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
            {/* Thêm nội dung giới thiệu */}
          </div>
        )}
        {currentPage === 'products' && (
          <div>
            <h1>Sản phẩm</h1>
            <p>Đây là trang đổ dữ liệu sản phẩm đó mấy th ***.</p>
            

            {/* Thêm nội dung giới thiệu */}
          </div>
        )}


      </Content>
      
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
        Bản quyền ©2024. Trang bán hàng. All rights reserved.
      </Footer>
      <Modal
        title="Đăng nhập"
        visible={loginVisible}
        onCancel={() => setLoginVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setLoginVisible(false)}>Hủy</Button>,
          <Button key="login" type="primary" onClick={handleLogin}>Đăng nhập</Button>,
        ]}
      >
        <Input
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Input.Password
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>

      <Modal
        title="Đăng ký"
        visible={registerVisible}
        onCancel={() => setRegisterVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setRegisterVisible(false)}>Hủy</Button>,
          <Button key="register" type="primary" onClick={handleRe}>Đăng ký</Button>,
        ]}
      >
        <Input
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Input
          placeholder="email của m"
          value={password}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Input
          placeholder="địa chỉ "
          value={password}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Input
          placeholder="Số điện thoại"
          value={password}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Input.Password
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    </Layout>
  );
};

export default App;