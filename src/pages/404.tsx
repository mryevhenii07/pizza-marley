import React from 'react';
import Image from 'next/image';
import NotFoundPageImg from '../../public/image/notFoundPage.png';
import Layout from '@/components/layout/layout';

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={NotFoundPageImg} alt="img" width={220} height={220} />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
