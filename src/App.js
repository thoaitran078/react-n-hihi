import React, { useState } from 'react';
import { Layout, Menu, Modal, Input, Button } from 'antd';
import 'antd/dist/reset.css';
//import { Steps } from 'antd';
//layout
//import type { MenuProps } from 'antd';
//import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

//import { Breadcrumb } from 'antd';

import App2 from './App2';
const { Header, Content, Footer } = Layout;
//const { Header, Content, Footer } = Layout;
///////////////*

/*
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
*/
//sản phẩm



////sản phẩm


//////
const App = () => {
  

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
          <Menu.Item key="about">Điểm Danh</Menu.Item>
          <Menu.Item key="products">Thông tin</Menu.Item>
        </Menu>
        <div style={{ float: 'right' }}>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="login" onClick={() => setLoginVisible(true)}>Đăng nhập</Menu.Item>
            <Menu.Item key="register"onClick={() => setRegisterVisible(true)}>Đăng ký</Menu.Item>
          </Menu>
        </div>
      </Header>
      {/*<Breadcrumb style={{ margin: '16px 0',padding: '15px' ,text: '500px' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>2</Breadcrumb.Item>
  </Breadcrumb>*/}
        
      <Content style={{ padding: '0px' }}>
        
        {currentPage === 'home' && (
          
          <div>
            <h1>Chào mừng đến với trang quản lý sinh viên bằng qr của Thoại</h1>
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
            <p>Xin chào! dưới Đây là giao diện hiển thị điểm danh cụ thể.</p>
            
            {/* Thêm nội dung giới thiệu */}
          </div>
        )}
        {currentPage === 'products' && (
          <div>
            <h1>Quản lý thông tin</h1>
            <p>Đây là trang hiển thị thông tin tài khoản của sinh viên nè.</p>
      


            {/* Thêm nội dung giới thiệu */}
          </div>
        )}


      </Content>
      {
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
        Bản quyền ©2024. Trang độc quyền của Thoại. All rights reserved.
      </Footer>
      }
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