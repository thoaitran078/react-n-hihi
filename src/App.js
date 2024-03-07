import React, { useState,useRef } from 'react';
import { Layout, Menu, Modal, Input, Button } from 'antd';
import 'antd/dist/reset.css';
//import { Steps } from 'antd';

//layout
import { CopyOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  
  Cascader,
  DatePicker,
  
  InputNumber,
  Select,
  Space,
  TimePicker,
  Tooltip,
  TreeSelect,
} from 'antd';


//import type { MenuProps } from 'antd';
//import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

//import { Breadcrumb } from 'antd';

import App2 from './App2';
const { Header, Content, Footer } = Layout;
//const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { TreeNode } = TreeSelect;

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
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
    }
    videoRef.current.srcObject = null;
    streamRef.current = null;
  };


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
            <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={stopCamera}>Stop Camera</button>
      <video ref={videoRef} autoPlay playsInline />
    </div>
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
            <Space direction="vertical">
    <Space.Compact block>
      <Input style={{ width: '20%' }} defaultValue="039" />
      <Input style={{ width: '30%' }} defaultValue="4250578" />
    </Space.Compact>
    <Space.Compact block size="small">
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input
        style={{ width: 'calc(100% - 200px)' }}
        defaultValue="git@github.com:ant-design/ant-design.git"
      />
      <Tooltip title="copy git url">
        <Button icon={<CopyOutlined />} />
      </Tooltip>
    </Space.Compact>
    <Space.Compact block>
      <Select defaultValue="Zhejiang" allowClear>
        <Option value="Zhejiang">THOẠI 1</Option>
        <Option value="Jiangsu">THOẠI 2</Option>
      </Select>
      <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact block>
      <Select allowClear mode="multiple" defaultValue="Zhejianggggg" style={{ width: '50%' }}>
        <Option value="Zhejianggggg">Zhejianggggg</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>
      <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact block>
      <Input.Search style={{ width: '30%' }} defaultValue="0571" />
      <Input.Search allowClear style={{ width: '50%' }} defaultValue="26888888" />
      <Input.Search style={{ width: '20%' }} defaultValue="+1" />
    </Space.Compact>
    <Space.Compact block>
      <Select defaultValue="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input style={{ width: '50%' }} defaultValue="input content" />
      <InputNumber defaultValue={12} />
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: '50%' }} defaultValue="input content" />
      <DatePicker style={{ width: '50%' }} />
    </Space.Compact>
    <Space.Compact block>
      <DatePicker.RangePicker style={{ width: '70%' }} />
      <Input style={{ width: '30%' }} defaultValue="input content" />
      <Button type="primary">CHỌN</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: '30%' }} defaultValue="input content" />
      <DatePicker.RangePicker style={{ width: '70%' }} />
    </Space.Compact>
    <Space.Compact block>
      <Select defaultValue="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <Select defaultValue="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
      </Select>
    </Space.Compact>
    <Space.Compact block>
      <Select defaultValue="1">
        <Option value="1">Between</Option>
        <Option value="2">Except</Option>
      </Select>
      <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }}
        placeholder="~"
        disabled
      />
      <Input
        className="site-input-right"
        style={{
          width: 100,
          textAlign: 'center',
        }}
        placeholder="Maximum"
      />
    </Space.Compact>
    <Space.Compact block>
      <Select defaultValue="Sign Up" style={{ width: '30%' }}>
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
      <AutoComplete
        style={{ width: '70%' }}
        placeholder="Email"
        options={[{ value: 'text 1' }, { value: 'text 2' }]}
      />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker style={{ width: '70%' }} />
      <Cascader
        style={{ width: '70%' }}
        options={[
          {
            value: 'Sóc trăng',
            label: 'Sóc Trăng',
            children: [
              {
                value: 'hangzhou',
                label: 'Ngã Năm',
                children: [
                  {
                    value: 'xihu',
                    label: 'Nhà tau',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Hồ Chí Minh',
            children: [
              {
                value: 'nanjing',
                label: 'Bình Thạnh',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Cầu Bình Lợi',
                  },
                ],
              },
            ],
          },
        ]}
        placeholder="Select Address"
      />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker.RangePicker />
      <TreeSelect
        showSearch
        style={{ width: '60%' }}
        value="leaf1"
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={() => {}}
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="leaf1" />
            <TreeNode value="leaf2" title="leaf2" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="input here" />
      <InputNumber placeholder="another input" addonBefore="$" />
      <InputNumber placeholder="another input" addonAfter="$" />
    </Space.Compact>
  </Space>
          </div>
          
          
          
        )}


      </Content>
      {
      <Footer style={{ position: 'fixed',bottom: 0, width: '100%', textAlign: 'center' }}>
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