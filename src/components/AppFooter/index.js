import React from 'react';
import { Typography } from 'antd';

const AppFooter = () => {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
      <Typography.Link href='https://www.google.com' target={'_blank'}>
        PrivacyPolicy
      </Typography.Link>
      <Typography.Link target={'_blank'}>Terms of Use</Typography.Link>
    </div>
  );
};

export default AppFooter;
