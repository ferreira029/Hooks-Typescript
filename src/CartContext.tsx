import { createContext } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Card {
  products: Product[];
  shipping_value?: number;
}


const CardContext = createContext<Card>({products: []});

export default CardContext;