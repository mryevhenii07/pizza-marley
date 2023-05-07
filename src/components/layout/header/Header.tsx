import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import Logo from '/public/image/logo.jpg';
import s from './Header.module.css';

type Props = {};

const Header: FC = () => {
  const [shadow, setShadow] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? s.headerShadows : s.header}>
      <Link href={'/'}>
        <Image src={Logo} alt="img-logo" width={15} height={15} />
      </Link>
      <nav>
        <Link href={'/'} className={pathname === '/' ? s.active : ''}>
          Піца
        </Link>
        <Link href={'/drinks'} className={pathname === '/drinks' ? s.active : ''}>
          Напої
        </Link>
        <Link href={'/combo'} className={pathname === '/combo' ? s.active : ''}>
          Комбо
        </Link>
        <Link href={'/contact'} className={pathname === '/contact' ? s.active : ''}>
          Контакти
        </Link>{' '}
        <Link href={'/about'} className={pathname === '/about' ? s.active : ''}>
          Про нас
        </Link>
      </nav>

      <div>
        <Link href="/cart">Кошик</Link>
      </div>
    </div>
  );
};

export default Header;
