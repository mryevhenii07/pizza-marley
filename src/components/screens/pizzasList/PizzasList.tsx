import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';

import pizzass from '/src/api/pizza.json';
import { MyPizza } from '@/types/interface/pizza';
import PizzaItem from './pizzaItem/PizzaItem';
import s from './PizzasList.module.css';

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
