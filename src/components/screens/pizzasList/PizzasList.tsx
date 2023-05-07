import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';

// import pizzass from '../../../api/pizza.json';
import { MyPizza } from '@/types/interface/pizza';
import PizzaItem from './pizzaItem/PizzaItem';
import s from './PizzasList.module.css';

const pizzass = [
  {
    id: '7',
    imageUrl:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_366x366.jpeg',
    title: 'Теріякі',
    types: [0, 1],
    sizes: [30, 40],
    info: 'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус',
    price: 120,
    category: 5,
    rating: 10,
  },
];

const PizzasList: FC = () => {
  const [pizzas, setPizzas] = useState<MyPizza[]>(pizzass);

  const { asPath, pathname } = useRouter();
  console.log();

  return (
    <div>
      <h2>Піца</h2>
      <ul className={s.list}>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
      </ul>
    </div>
  );
};

export default PizzasList;
