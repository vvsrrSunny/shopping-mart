import { redirect } from 'next/navigation';

const page: React.FC = () => {
  redirect('/products');
};

export default page;