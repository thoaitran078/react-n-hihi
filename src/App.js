import React, { useState } from 'react';
import { Layout, Menu, Modal, Input, Button } from 'antd';
import 'antd/dist/reset.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập tại đây
    console.log('Đăng nhập với tên người dùng:', username, 'và mật khẩu:', password);
    // Sau khi xử lý đăng nhập, bạn có thể chuyển đến trang chính hoặc thực hiện các hành động khác
    // Ví dụ: history.push('/dashboard');
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Trang chủ</Menu.Item>
          <Menu.Item key="about">Giới thiệu</Menu.Item>
          <Menu.Item key="products">Sản phẩm</Menu.Item>
        </Menu>
        <div style={{ float: 'right' }}>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="login" onClick={() => setLoginVisible(true)}>Đăng nhập</Menu.Item>
            <Menu.Item key="register">Đăng ký</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content style={{ padding: '50px' }}>
        <h1>Chào mừng đến với trang bán hàng</h1>
        <p>Xin chào! Đây là trang bán hàng của chúng tôi.</p>
        <p>Hãy khám phá các sản phẩm tuyệt vời mà chúng tôi cung cấp.</p>
        <div className="product-list">
          {/* Hiển thị danh sách sản phẩm */}
        </div>
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
    </Layout>
  );
};

export default App;