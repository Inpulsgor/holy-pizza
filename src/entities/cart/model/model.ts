export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  type: string;
  size: number;
  count: number;
}

export interface CartState {
  totalPrice: number;
  items: CartItem[];
}
