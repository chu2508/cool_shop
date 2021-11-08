import { useState } from "react";

interface ICartItem {
  productId: string;
  quantity: number;
}
export function useCart() {
  const [items, setItems] = useState<ICartItem[]>([]);

  const add = (productId: string) => {
    let item = items.find((it) => (it.productId = productId));
    if (item) {
      item.quantity += 1;
      setItems([...items]);
    } else {
      setItems([...items, { productId, quantity: 1 }]);
    }
  };
  const subtract = (productId) => {
    let idx = items.findIndex((it) => (it.productId = productId));
    if (idx != -1) {
      const item = items[idx];
      item.quantity -= 1;
      if (item.quantity <= 0) {
        items.splice(idx, 1);
        setItems([...items]);
      }
    }
  };
  const remove = (productId) => {
    const idx = items.findIndex((item) => item.productId === productId);
    if (idx !== -1) {
      items.splice(idx, 1);
      setItems([...items]);
    }
  };
  return { items, add, subtract, remove };
}
