import { MenuItem } from '@/types';

// Import food images
import burgerGoldenCrispy from '@/assets/burger-golden-crispy.jpg';
import burgerSpicyZinger from '@/assets/burger-spicy-zinger.jpg';
import burgerClassic from '@/assets/burger-classic.jpg';
import burgerBBQCheese from '@/assets/burger-bbq-cheese.jpg';
import friesGoldenCrispy from '@/assets/fries-golden-crispy.jpg';
import friesLoadedCheese from '@/assets/fries-loaded-cheese.jpg';
import drinkLemonade from '@/assets/drink-lemonade.jpg';
import drinkMangoSmoothie from '@/assets/drink-mango-smoothie.jpg';
import pizzaChickenSupreme from '@/assets/pizza-chicken-supreme.jpg';
import pizzaMargherita from '@/assets/pizza-margherita.jpg';

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 'burger-1',
    name: 'Golden Crispy Chicken Burger',
    description: 'Tender chicken breast, golden crispy coating, fresh lettuce, mayo, and special sauce',
    price: 450,
    image: burgerGoldenCrispy,
    category: 'Burgers',
    featured: true,
  },
  {
    id: 'burger-2',
    name: 'Spicy Zinger Burger',
    description: 'Fiery chicken fillet with spicy sauce, lettuce, and mayo in a soft bun',
    price: 520,
    image: burgerSpicyZinger,
    category: 'Burgers',
    featured: true,
  },
  {
    id: 'burger-3',
    name: 'Classic Chicken Burger',
    description: 'Original recipe chicken breast with fresh vegetables and signature sauce',
    price: 380,
    image: burgerClassic,
    category: 'Burgers',
  },
  {
    id: 'burger-4',
    name: 'BBQ Cheese Burger',
    description: 'Juicy chicken with melted cheese, BBQ sauce, and caramelized onions',
    price: 550,
    image: burgerBBQCheese,
    category: 'Burgers',
  },

  // Fries
  {
    id: 'fries-1',
    name: 'Golden Crispy Fries',
    description: 'Perfectly seasoned golden fries with a crispy exterior and fluffy interior',
    price: 180,
    image: friesGoldenCrispy,
    category: 'Fries',
  },
  {
    id: 'fries-2',
    name: 'Loaded Cheese Fries',
    description: 'Crispy fries topped with melted cheese, jalapeños, and special sauce',
    price: 250,
    image: friesLoadedCheese,
    category: 'Fries',
  },
  {
    id: 'fries-3',
    name: 'Spicy Masala Fries',
    description: 'Crispy fries with our signature spicy masala seasoning',
    price: 200,
    image: friesGoldenCrispy, // Reusing similar image
    category: 'Fries',
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Fresh Lemonade',
    description: 'Refreshing homemade lemonade with mint and ice',
    price: 120,
    image: drinkLemonade,
    category: 'Drinks',
  },
  {
    id: 'drink-2',
    name: 'Mango Smoothie',
    description: 'Creamy mango smoothie made with fresh mangoes and yogurt',
    price: 160,
    image: drinkMangoSmoothie,
    category: 'Drinks',
  },
  {
    id: 'drink-3',
    name: 'Cola',
    description: 'Chilled cola drink to complement your meal',
    price: 80,
    image: drinkLemonade, // Placeholder - will use lemonade image
    category: 'Drinks',
  },
  {
    id: 'drink-4',
    name: 'Iced Coffee',
    description: 'Rich cold brew coffee with ice and milk',
    price: 140,
    image: drinkMangoSmoothie, // Placeholder - will use smoothie image
    category: 'Drinks',
  },

  // Pizza
  {
    id: 'pizza-1',
    name: 'Chicken Supreme Pizza',
    description: 'Loaded with chicken, cheese, vegetables, and our special pizza sauce',
    price: 800,
    image: pizzaChickenSupreme,
    category: 'Pizza',
    featured: true,
  },
  {
    id: 'pizza-2',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil',
    price: 650,
    image: pizzaMargherita,
    category: 'Pizza',
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken Pizza',
    description: 'Tender chicken with BBQ sauce, onions, and cheese',
    price: 750,
    image: pizzaChickenSupreme, // Reusing similar image
    category: 'Pizza',
  },
  {
    id: 'pizza-4',
    name: 'Veggie Delight Pizza',
    description: 'Fresh vegetables with cheese and herbs on crispy crust',
    price: 600,
    image: pizzaMargherita, // Reusing similar image
    category: 'Pizza',
  },
];

export const featuredItems = menuItems.filter(item => item.featured);