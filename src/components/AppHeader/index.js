import { Image, Typography, Space, Badge } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import React from 'react';

const AppHeader = () => {
  return (
    <div className='AppHeader'>
      <Image
        width={40}
        src='https://yt3.ggpht.com/ytc/AL5GRJVbE2u7nMjJ6Wi3XThhqPhAUsVnXgz9RzZOLPTL=s88-c-k-c0x00ffffff-no-rj'
      />
      <Typography.Title>Aamir's Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={10}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
