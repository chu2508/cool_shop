import { useEffect, useState } from "react";
import getServiceToken from "src/tools/getServiceToken";

interface ICartItem {
  productId: string;
  quantity: number;
}

const LOCAL_KEY = "__COOL_CART_ITEMS";
// TODO 后面修改成通过context注入cache服务
const getLocalItems = () => {
  const str = localStorage.getItem(LOCAL_KEY);
  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return [];
    }
  }
  return [];
};

export default function useCart() {
  const [items, setItems] = useState<ICartItem[]>(getLocalItems());

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  }, [items]);

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
      }
      setItems([...items]);
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

export const CartService = getServiceToken(useCart)
