import { Typography, Space, Card, Statistic, Table } from 'antd';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { getRecentOrders } from '../../api';

const Dashboard = () => {
  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Orders'}
          value={12345}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Inventory'}
          value={12345}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Customer'}
          value={12345}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Revenue'}
          value={12345}
        />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </Space>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecentOrders().then((res) => {
      console.log(res.products);
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: 'title',
            dataIndex: 'title',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },
          {
            title: 'Price',
            dataIndex: 'price',
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default Dashboard;
