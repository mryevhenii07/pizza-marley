import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout/layout';
import PizzasList from '@/components/screens/pizzasList/PizzasList';
const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <Layout>
      <PizzasList />
    </Layout>
  );
}
