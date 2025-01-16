export type Navigation = { pages: { name: string; href: string }[] };

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Rating = {
  rate: number;
  count: number;
};
