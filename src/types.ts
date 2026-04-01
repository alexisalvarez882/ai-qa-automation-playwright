export type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

export type Cart = {
  items: CartItem[];
};