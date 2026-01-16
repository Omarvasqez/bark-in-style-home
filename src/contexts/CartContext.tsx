import { createContext, useContext, useState, ReactNode } from "react";

export interface ProductVariant {
  size?: string;
  color?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: ProductVariant;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string, variant?: ProductVariant) => void;
  updateQuantity: (id: string, quantity: number, variant?: ProductVariant) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discountCode: string;
  discountPercent: number;
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const getItemKey = (id: string, variant?: ProductVariant) => {
  if (!variant) return id;
  return `${id}-${variant.size || ""}-${variant.color || ""}`;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const addItem = (newItem: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.variant?.size === newItem.variant?.size &&
          item.variant?.color === newItem.variant?.color
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { ...newItem, quantity }];
    });
  };

  const removeItem = (id: string, variant?: ProductVariant) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.variant?.size === variant?.size &&
            item.variant?.color === variant?.color
          )
      )
    );
  };

  const updateQuantity = (id: string, quantity: number, variant?: ProductVariant) => {
    if (quantity <= 0) {
      removeItem(id, variant);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.variant?.size === variant?.size &&
        item.variant?.color === variant?.color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode("");
    setDiscountPercent(0);
  };

  const applyDiscount = (code: string): boolean => {
    // Valid discount codes
    const validCodes: Record<string, number> = {
      BIENVENIDO10: 10,
      BARK10: 10,
    };

    const upperCode = code.toUpperCase();
    if (validCodes[upperCode]) {
      setDiscountCode(upperCode);
      setDiscountPercent(validCodes[upperCode]);
      return true;
    }
    return false;
  };

  const removeDiscount = () => {
    setDiscountCode("");
    setDiscountPercent(0);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discountCode,
        discountPercent,
        applyDiscount,
        removeDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
