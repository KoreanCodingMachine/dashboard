import { Typography, Table, Space, Avatar, Rate } from 'antd';
import React, { useState, useEffect } from 'react';
import { getAllUsers, getInventory } from './../../api/index';

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllUsers().then((res) => {
      console.log(res.users);
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Customers</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: 'Photo',
              dataIndex: 'image',
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: 'FirstName',
              dataIndex: 'firstName',
            },
            {
              title: 'LastName',
              dataIndex: 'lastName',
            },
            {
              title: 'MadienName',
              dataIndex: 'maidenName',
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
            {
              title: 'Phone',
              dataIndex: 'phone',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
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

export default Customers;
