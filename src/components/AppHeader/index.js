import { Image, Typography, Space, Badge, Drawer, List } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getComments, getRecentOrders } from './../../api/index';

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getRecentOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className='AppHeader'>
      <Image
        width={40}
        src='https://yt3.ggpht.com/ytc/AL5GRJVbE2u7nMjJ6Wi3XThhqPhAUsVnXgz9RzZOLPTL=s88-c-k-c0x00ffffff-no-rj'
      />
      <Typography.Title>Aamir's Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length}>
          <MailOutlined
            onClick={() => {
              setCommentsOpen(true);
            }}
            style={{ fontSize: 24 }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title='Comments'
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title='Notification'
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
