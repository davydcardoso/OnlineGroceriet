import React, { createContext, useCallback, useContext, useState } from 'react';

export type ProductsProps = {
  id: string;
  name: string;
  description: String;
  value: number;
  discount: number;
  quantity: number;
  image: string;
};

interface CartContextProps {
  products: ProductsProps[];
  addToCart(item: ProductsProps): void;
  increment(id: string): void;
  decrement(id: string): void;
  remove(id: string): void;
  cartTotal(): number;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const addToCart = (products: ProductsProps) => {
    setProducts(oldProducts => [...oldProducts, { ...products, quantity: 1 }]);
  };

  const increment = (id: string) => {
    setProducts(oldProducts =>
      oldProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decrement = (id: string) => {
    setProducts(oldProducts =>
      oldProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  const remove = (id: string) => {
    setProducts(oldProducts =>
      oldProducts.filter(product => product.id !== id),
    );
  };

  const cartTotal = () => {
    let total = 0;

    for (const product of products) {
      total += product.value * product.quantity;
    }

    return total;
  };

  return (
    <CartContext.Provider
      value={{ products, increment, addToCart, decrement, remove, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextProps {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}
