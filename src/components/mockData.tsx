export type MockDataType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number | string;
  incremented: boolean;
};

export const mockData: MockDataType[] = [
  {
    id: '1',
    title: 'Caramel Sprinkles Donut',
    description: 'Caramel, Sugar, Colored Sprinkles',
    image: require('../assets/products/product-01.png'),
    price: 2.99,
    incremented: false,
  },
  {
    id: '2',
    title: 'Strawberry Donut',
    description: 'Strawberry Dough, Strawberry Jam, Sugar Glaze',
    image: require('../assets/products/product-02.png'),
    price: 3.25,
    incremented: false,
  },
  {
    id: '3',
    title: 'Choco Donut',
    description: 'Chocolate, Peanut Flakes',
    image: require('../assets/products/product-03.png'),
    price: 2.5,
    incremented: false,
  },
  {
    id: '4',
    title: 'Pinky Flakes Donut',
    description: 'Cherry Flavored Dough, Cotton Candy Glaze, Sugar Flakes',
    image: require('../assets/products/product-04.png'),
    price: 4.15,
    incremented: false,
  },
];
