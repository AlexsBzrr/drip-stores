// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
  previousPrice?: number;
  quantity: number;
  size?: number;
  color?: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalValue: number;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalValue: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Recalcular totais
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      // No seu cartSlice:
      state.totalValue = state.items.reduce((sum, item) => {
        const price = isNaN(item.currentPrice) ? 0 : item.currentPrice;
        const quantity = isNaN(item.quantity) ? 0 : item.quantity;
        return sum + price * quantity;
      }, 0);
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size?: number; color?: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
      );

      // Recalcular totais
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalValue = state.items.reduce(
        (total, item) => total + item.currentPrice * item.quantity,
        0
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        size?: number;
        color?: string;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i !== item);
        }
      }

      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalValue = state.items.reduce(
        (total, item) => total + item.currentPrice * item.quantity,
        0
      );
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalValue = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  closeCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
