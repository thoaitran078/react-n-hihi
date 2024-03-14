import React, { useState } from 'react';
import {
  DesktopOutlined,
  
  PieChartOutlined,
  
  UserOutlined,
  CarryOutOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Quản lý sinh viên', '1', <DesktopOutlined />),

  getItem('Quản lý điểm', '2', < PieChartOutlined/>),
  getItem('Quản lý lớp học', '3', <CarryOutOutlined />),
  getItem('Tra cứu thông tin', '4', <DesktopOutlined />),


  getItem('User', 'sub1', <UserOutlined />), /*[
    getItem('THOẠI', '3'),
    getItem('TÂN', '4'),
    getItem('PHÚC', '5'),
  ]),*/
  //getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Thông báo', '9', <MailOutlined />),
  <MailOutlined />
];
const App = ({ onBack }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
    
      style={{  
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Quản lý</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <button onClick={onBack}>Quay lại Trang chủ</button>
            <tr><h1>Quản lý sinh viên: Cung cấp chức năng quản lý thông tin sinh viên. Quản lý viên có thể thêm, sửa đổi và xóa thông tin sinh viên, cập nhật hồ sơ, quản lý học phí, điểm số và các thông tin khác liên quan.</h1></tr>
            <tr><h1>Quản lý user: Cho phép quản lý các tài khoản người dùng trong hệ thống. Chức năng này bao gồm tạo, sửa đổi và xóa tài khoản người dùng, quản lý quyền truy cập và xác thực người dùng.</h1></tr>
            <tr><h1>Quản lý lớp học: Cho phép quản lý viên tạo và quản lý các lớp học trong hệ thống. Chức năng này bao gồm thêm, sửa đổi và xóa thông tin lớp học, gán sinh viên vào lớp, quản lý danh sách sinh viên và lịch trình học. </h1></tr>
            <tr><h1>Quản lý điểm số: Cung cấp chức năng quản lý điểm số của sinh viên. Quản lý viên có thể nhập và cập nhật điểm số, tính toán điểm trung bình, xuất báo cáo điểm và thống kê kết quả học tập.</h1></tr>
            <tr><h1>Tra cứu thông tin sinh viên: Cho phép quản lý viên tra cứu thông tin sinh viên theo mã QR hoặc tìm kiếm theo các tiêu chí khác như tên, lớp học, mã số sinh viên, v.v.</h1></tr>
            <tr><h1>Gửi thông báo và tin nhắn: Cung cấp chức năng gửi thông báo và tin nhắn đến sinh viên và giảng viên thông qua hệ thống. Quản lý viên có thể gửi thông báo về các sự kiện, thay đổi lịch trình, thông tin quan trọng và liên lạc với người dùng. </h1></tr>
    
            <button onClick={onBack}>Quay lại Trang chủ</button>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;