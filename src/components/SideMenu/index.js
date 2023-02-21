import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div className='SideMenu'>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: 'Dashboard',
            icon: <AppstoreAddOutlined />,
            key: '/',
          },
          {
            label: 'Inventory',
            key: '/inventory',
            icon: <ShopOutlined />,
          },
          {
            label: 'Orders',
            key: '/orders',
            icon: <ShoppingCartOutlined />,
          },
          {
            label: 'Customers',
            key: '/customers',
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
