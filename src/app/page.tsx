import { redirect } from 'next/navigation';

const Home: React.FC = () => {
  redirect('/products');
};

export default Home;
