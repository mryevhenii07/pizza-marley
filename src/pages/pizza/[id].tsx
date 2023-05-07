import { NextPage } from 'next';
import { useRouter } from 'next/router';

const PizzaPage: NextPage = () => {
  const { asPath, pathname, query, push, replace } = useRouter();
  console.log(asPath);
  console.log(query.id);

  return (
    <div>
      <h1>Helllllllllllllllllo</h1>
    </div>
  );
};

export default PizzaPage;
