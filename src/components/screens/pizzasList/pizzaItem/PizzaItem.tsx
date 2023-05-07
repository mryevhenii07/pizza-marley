import { MyPizza } from '@/types/interface/pizza';
import { FC } from 'react';
import s from './PizzaItem.module.css';
interface PropsItem extends MyPizza {}

const PizzasList: FC<PropsItem> = ({ price }) => {
  return (
    <li className={s.item}>
      <div>IMG</div>
      <div>Name</div>
      <div>Description</div>
      <div>Price: {price}</div>
    </li>
  );
};

export default PizzasList;
