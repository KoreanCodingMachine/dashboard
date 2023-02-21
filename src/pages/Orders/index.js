import { Typography, Table, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { getRecentOrders } from './../../api/index';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getRecentOrders().then((res) => {
      console.log(res.products);
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Orders</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: 'Title',
              dataIndex: 'title',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              render: (value) => <span>${value}</span>,
            },
            {
              title: 'DiscountedPrice',
              dataIndex: 'discountedPrice',
              render: (value) => <span>${value}</span>,
            },
            {
              title: 'Quantity',
              dataIndex: 'quantity',
            },
            {
              title: 'Total',
              dataIndex: 'total',
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
};

export default Orders;
