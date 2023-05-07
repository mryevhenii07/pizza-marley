import Layout from '@/components/layout/layout';
import React from 'react';
import Image from 'next/image';

import FantaImg from '/public/image/drink/fanta.png';

type Props = {};

const Drinks = (props: Props) => {
  return (
    <Layout>
      <div>
        <ul>
          <li style={{ marginLeft: '20px' }}>
            <Image src={FantaImg} alt="img" width={150} height={150} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
              {' '}
              <div>Fanta</div>
              <div>Price</div>
            </div>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <Image src={FantaImg} alt="img" width={150} height={150} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
              {' '}
              <div>Fanta</div>
              <div>Price</div>
            </div>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <Image src={FantaImg} alt="img" width={150} height={150} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
              {' '}
              <div>Fanta</div>
              <div>Price</div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Drinks;
