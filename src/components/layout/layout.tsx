import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

type Props = {};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: '1290px',
          border: '1px solid red',
          margin: '0 auto',
          padding: '15px',
          // backgroundColor: 'yellow',
        }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
