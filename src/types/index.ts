export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Burgers' | 'Fries' | 'Drinks' | 'Pizza';
  featured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}